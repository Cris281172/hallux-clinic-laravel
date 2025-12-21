import { MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../../ui/button.tsx';
import ChatContent from './chat-content.jsx';

const Chat = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);

    return (
        <>
            {isChatOpen && <ChatContent />}
            {!isChatOpen && (
                <Button className={'fixed right-2 bottom-2 z-50'} variant={'darkPlum'} onClick={() => setIsChatOpen(true)}>
                    <MessageCircle />
                </Button>
            )}
        </>
    );
};

export default Chat;
