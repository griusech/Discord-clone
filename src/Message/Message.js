import React from 'react'
import './Message.css'
import { Avatar } from '@material-ui/core'

const Message = () => {
    return (
        <div className="message">
            <Avatar />
            <div className="message-info">
                <h4>Pitunetix<span className="message-timestamp">Just Now</span></h4>
            <p>Mensaje</p>
            </div>
        </div>
    )
}

export default Message;
