import React, { FunctionComponent, useState, useEffect } from 'react';
import Chat from '../models/Chat';
import CHAT from '../models/mock-chat';
import ChatCard from '../components/chat-card';

const ChatList: FunctionComponent = () => {
    const [chats, setchats] = useState<Chat[]>([]);

    useEffect(() => {
        setchats(CHAT);


    }, []);
    return (
        <div>
            <h1 className="center">ChatChatDex</h1>
            <div className="container">
                <div className="row">
                    {chats.map(chat => (
                        <ChatCard key={chat.id} chat={chat}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ChatList;