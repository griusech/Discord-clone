import React, { useState } from 'react'
import ChatHeader from '../ChatHeader/ChatHeader'
import Message from '../Message/Message'
import './Chat.css'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import { useSelector } from 'react-redux';
import { selectChannelId, selectChannelName } from '../features/appSlice';
import { selectUser } from '../features/userSlice';

const Chat = () => {

    const user = useSelector(selectUser)
    const channelId = useSelector(selectChannelId)
    const channelName = useSelector(selectChannelName)

    const [ input, setInput ] = useState('')
    const [ messages, setMessages ] = useState([])

    return (
        <div className="chat">
            <ChatHeader 
                channelName={channelName}
            />

            <div className="chat-messages">
                {messages.map(msg => (
                    <Message />
                ))}

            </div>

            <div className="chat-input">
                <AddCircleIcon fontSize="medium" />
                
                <form action="">
                    <input 
                    value={input}
                    disabled={!channelId}
                    onChange={e => setInput(e.target.value)}
                    placeholder={channelId ? `Escribir en # ${channelName}` : 'Seleccione un Canal'} />                    
                    <button 
                    className="chat-inputButton"
                    type="submit">

                    </button>
                </form>
                <div className="chat-inputIcon">
                    <CardGiftcardIcon fontSize="medium"/>
                    <GifIcon fontSize="medium"/>
                    <EmojiEmotionsIcon fontSize="medium"/>
                </div>
            </div>

        </div>
    )
}

export default Chat
