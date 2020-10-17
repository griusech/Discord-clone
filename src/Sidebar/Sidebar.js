import React from 'react'
import './Sidebar.css';
import { useSelector } from 'react-redux'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SidebarChannel from '../SidebarChannel/SidebarChannel';
import { Avatar } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';

const Sidebar = () => {

    const user = useSelector(selectUser)

    return (
        <div className="sidebar">

            <div className="sidebar-top">
                <h3>Guille Developer</h3>
                <ExpandMoreIcon />
            </div>

            <div className="sidebar-channels">
                <div className="sidebar-channelsHeader">
                    <div className="sidebar-header">
                        <ExpandMoreIcon />
                        <h4>Texto de canales</h4>
                    </div>
                    <AddIcon className="sidebar-addChannel" />
                </div>
                <div className="sidebar-channelList">
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                </div>    
            </div>

            <div className="sidebar-profile">
                <Avatar src={user.photo} />
                <div className="sidebar-profileInfo">
                    <h3>{user.displayName}</h3>
                    <p>#{user.uid.slice(0, 8)}</p>
                </div>
                <div className="sidebar-profileIcons">
                    <MicIcon />
                    <HeadsetIcon />
                    <SettingsIcon />
                <p 
                onClick={() => auth.signOut()}
                className="logout">
                    Desconectar
                </p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
