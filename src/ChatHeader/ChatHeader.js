import React from 'react'
import './ChatHeader.css'
import NotificationsIcon from '@material-ui/icons/Notifications';
import EditLocationRoundedIcon from '@material-ui/icons/EditLocationRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import InboxRoundedIcon from '@material-ui/icons/InboxRounded';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';

const ChatHeader = ({channelName}) => {
    return (
        <div className="chatHeader">
            <div className="chatHeader-left">
                <h3>
                    <span className="chatHeader-hash">
                        #
                    </span>
                    {channelName}
                </h3>
            </div>
            <div className="chatHeader-right">
                <NotificationsIcon />
                <EditLocationRoundedIcon />
                <PeopleAltRoundedIcon />

                <div className="chatHeader-search">
                    <input placeholder="Buscar"/>
                    <SearchRoundedIcon />
                </div>
                <InboxRoundedIcon />
                <HelpRoundedIcon />
            </div>
        </div>
    )
}

export default ChatHeader
