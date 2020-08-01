import React, {FunctionComponent, useState} from "react";
import Chat from "../models/Chat";
import "./chat-card.css";
import formatDate from "../helpers/format-date";
import formatType from "../helpers/format-type";

type Props = {
    chat: Chat
    borderColor?: string
};

const ChatCard: FunctionComponent<Props> = ({chat, borderColor = '#009688'}) => {
    const [color, setColor] = useState<string>();

    const showborder = () => {
        setColor(borderColor);
    }
    const hideBorder = () => {
        setColor('#F5F5F5');
    }


    return (
        <div className="col s6 m4" onMouseEnter={showborder} onMouseLeave={hideBorder}>
            <div className="card horizontal" style={{borderColor: color}}>
                <div className="card-image">
                    <img src={chat.picture} alt={chat.name}/>
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <p>{chat.name}</p>
                        <p><small>{formatDate(chat.created)}</small></p>

                        {chat.types.map(type => (
                                <span key={type} className={formatType(type)}> {type}</span>
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatCard;