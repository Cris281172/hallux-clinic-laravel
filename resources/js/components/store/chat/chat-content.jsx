import { useForm } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useOnInView } from 'react-intersection-observer';
import { callToApi } from '../../../utils/api/callToApi.js';
import { Button } from '../../ui/button.tsx';
import { Textarea } from '../../ui/textarea.tsx';
export const ChatFooter = ({ isAdmin, chatID, setMessages }) => {
    const { data, setData, post } = useForm({
        message: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await callToApi({
                url: route(isAdmin ? 'api.dashboard.store.chat.send.to.user' : 'api.store.chat.send.message.to.admin'),
                method: 'POST',
                data: {
                    ...data,
                    chatID,
                },
            });
            if (response.success) {
                setMessages((prev) => [...prev, { message: response.message.message, from_admin: response.message.from_admin }]);
            }
        } catch (err) {
        } finally {
        }
    };

    return (
        <form onSubmit={handleSubmit} className={'flex gap-3'}>
            <Textarea
                onChange={(e) => setData('message', e.target.value)}
                placeholder="Type your feedback here"
                className="field-sizing-content max-h-15 min-h-0 min-w-60 resize-none py-1.75 text-black"
            />
            <Button>Send</Button>
        </form>
    );
};

const ChatContent = () => {
    const [chatID, setChatID] = useState(null);
    const [messages, setMessages] = useState([]);
    const [currentPage, setCurrentPage] = useState();
    const [lastPage, setLastPage] = useState(null);
    const contentRef = useRef(null);
    const [loading, setLoading] = useState(false);

    const chatInit = async (page) => {
        if (currentPage >= lastPage) {
            return;
        }
        setLoading(true);
        try {
            const response = await callToApi({
                url: route('api.store.chat.init', { page: page }),
            });
            setChatID(response.data.chatID);
            setCurrentPage(response.data.messages.current_page);
            setLastPage(response.data.messages.last_page);
            setMessages((prevState) =>
                page === 1
                    ? response.data.messages.data.sort((a, b) => a.id - b.id)
                    : [...response.data.messages.data.sort((a, b) => a.id - b.id), ...prevState],
            );
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    const inViewRef = useOnInView((inView, entry) => {
        if (inView && !loading) {
            chatInit(currentPage + 1);
        }
    });

    useEffect(() => {
        chatInit(1);
    }, []);

    useEffect(() => {
        if (!chatID) return;

        const channel = window.Echo.channel(`chat.${chatID}`);
        channel.listen('.MessageSent', (e) => {
            setMessages((prev) => [...prev, { message: e.message, from_admin: true }]);
        });
        return () => window.Echo.leave(`chat.${chatID}`);
    }, [chatID]);

    return (
        <div className="fixed right-2 bottom-2 z-50 w-80 border bg-white p-3 shadow-xl">
            <div className="flex h-46 flex-col">
                <div className="border-b pb-2">Support</div>

                <InfiniteScroll
                    pageStart={0}
                    loadMore={chatInit}
                    hasMore={true}
                    loader={
                        <div className="loader" key={0}>
                            Loading ...
                        </div>
                    }
                    isReverse={true}
                    useWindow={false}
                    dataLength={messages.length}
                >
                    {messages.map((msg, i) => (
                        <div key={i} className={msg.from_admin ? 'text-red-600' : 'text-gray-900'}>
                            {msg.message}
                        </div>
                    ))}
                </InfiniteScroll>

                {/*<div className="flex-1 space-y-2 overflow-y-auto py-2" ref={contentRef}>*/}
                {/*    <div ref={inViewRef}></div>*/}
                {/*    {messages.map((msg, i) => (*/}
                {/*        <div key={i} className={msg.from_admin ? 'text-red-600' : 'text-gray-900'}>*/}
                {/*            {msg.message}*/}
                {/*        </div>*/}
                {/*    ))}*/}
                {/*</div>*/}

                <ChatFooter chatID={chatID} setMessages={setMessages} />
            </div>
        </div>
    );
};

export default ChatContent;
