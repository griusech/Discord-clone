import React from 'react'
import ChatHeader from '../ChatHeader/ChatHeader'
import Message from '../Message/Message'
import './Chat.css'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';



const Chat = () => {
    return (
        <div className="chat">
            <ChatHeader />

            <div className="chat-messages">
                <Message />
                <Message />
                <Message />
                <Message />
            </div>

            <div className="chat-input">
                <AddCircleIcon fontSize="medium" />
                
                <form action="">
                    <input placeholder="Enviar mensaje" />                    
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
