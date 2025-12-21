import { useEffect, useRef, useState } from 'react';
import Heading from '../../../../components/heading.tsx';
import { ChatFooter } from '../../../../components/store/chat/chat-content.jsx';
import DashboardLayout from '../../../../layouts/dashboard-layout.jsx';
import formatDatePolish from '../../../../utils/formatDatePolish.js';

const GetChat = ({ chat }) => {
    const [messages, setMessages] = useState([]);

    const chatContentRef = useRef(null);

    const scrollToBottom = () => {
        if (chatContentRef.current) {
            chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
        }
    };
    useEffect(() => {
        setMessages(chat.messages);
    }, [chat.messages]);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        if (!chat.id) return;

        const channel = window.Echo.private(`support.admin`);
        channel.listen('.MessageSent', (e) => {
            if (chat.id === e.chatID) {
                setMessages((prevState) => [...prevState, e]);
                const elHeight = chatContentRef.current.offsetHeight;
                chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight / elHeight;
            }
        });
        return () => window.Echo.leave(`support.admin`);
    }, [chat.id]);

    return (
        <DashboardLayout>
            <Heading title={`Chat`} />
            <div className={'flex max-h-50 w-full flex-col gap-5 overflow-y-auto px-5 py-5'} ref={chatContentRef}>
                {messages.map((chatItem, index) => (
                    <div key={index} className={''}>
                        {chatItem.from_admin ? (
                            <div className={'flex justify-end'}>
                                <p className={'flex max-w-3/4 flex-col rounded-2xl bg-white p-3 text-gray-900'}>
                                    <span>{chatItem.message}</span>
                                    <span className={'mt-1 text-xs text-gray-500'}>{formatDatePolish(chatItem.created_at)}</span>
                                </p>
                            </div>
                        ) : (
                            <div className={'flex justify-start'}>
                                <div className={'flex max-w-3/4 flex-col rounded-2xl bg-gray-900 p-3 text-white'}>
                                    <span>{chatItem.message}</span>
                                    <span className={'text-gray- mt-1 text-xs'}>{formatDatePolish(chatItem.created_at)}</span>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            {/*<div>{chat.messages}</div>*/}
            <ChatFooter isAdmin={true} chatID={chat.id} setMessages={setMessages} />
        </DashboardLayout>
    );
};

export default GetChat;
