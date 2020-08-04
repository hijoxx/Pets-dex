import React, { FunctionComponent, useState, useEffect } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import Chat from '../models/Chat';
import CHATS from '../models/mock-chat';
import formatDate from '../helpers/format-date';
import formatType from '../helpers/format-type';

type Params = { id: string };

const ChatsDetail: FunctionComponent<RouteComponentProps<Params>> = ({ match }) => {

    const [chat, setChat] = useState<Chat|null>(null);

    useEffect(() => {
        CHATS.forEach(chat => {
            if (match.params.id === chat.id.toString()) {
                setChat(chat);
            }
        })
    }, [match.params.id]);

    return (
        <div>
            { chat ? (
                <div className="row">
                    <div className="col s12 m8 offset-m2">
                        <h2 className="header center">{ chat.name }</h2>
                        <div className="card hoverable">
                            <div className="card-image">
                                <img src={chat.picture} alt={chat.name} style={{width: '250px', margin: '0 auto'}}/>
                            </div>
                            <div className="card-stacked">
                                <div className="card-content">
                                    <table className="bordered striped">
                                        <tbody className="teal">
                                        <tr>
                                            <td>Nom</td>
                                            <td><strong>{ chat.name }</strong></td>
                                        </tr>
                                        <tr>
                                            <td>Types</td>
                                            <td>
                                                {chat.types.map(type => (
                                                    <span key={type} className={formatType(type)}>{type}</span>
                                                ))}</td>
                                        </tr>
                                        <tr>
                                            <td>Date de création</td>
                                            <td>{formatDate(chat.created)}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="card-action">
                                    <Link to="/">Retour</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <h4 className="center">Aucun Chat à afficher !</h4>
            )}
        </div>
    );
}

export default ChatsDetail;