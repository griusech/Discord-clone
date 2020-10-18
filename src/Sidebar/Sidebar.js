import React, { useEffect, useState } from 'react'
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
import db, { auth } from '../firebase';

const Sidebar = () => {

    const user = useSelector(selectUser)

    const [channel, setChannel] = useState([])

    useEffect(() => {
        db.collection('channels').onSnapshot(spanpshot => (
            setChannel(spanpshot.docs.map(doc => ({
                id: doc.id,
               channel: doc.data() 
            })))
        ))
    }, [])


    //AGREGO UN NUEVO CANAL
    const addChannel = () => {
        const channelName = prompt('Ingresar nombre del canal')

        if(channelName) {
            db.collection('channels').add({
                channelName: channelName
            })
        }
    }

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
                        <h4>Agregar Canal</h4>
                    </div>
                    <AddIcon 
                    onClick={addChannel}
                    className="sidebar-addChannel" 
                    />
                </div>
                <div className="sidebar-channelList">
                    {channel.map(( {id, channel} ) => (
                        <SidebarChannel 
                        key = {id}
                        id={id}
                        channelName = {channel.channelName}
                        />
                    ))}
                    
                    
                </div>    
            </div>

            <div className="sidebar-profile">
                <Avatar src={user.photo} />
                <div className="sidebar-profileInfo">
                    <h3>{user.displayName.split(' ')[0]}</h3>
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
