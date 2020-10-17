import React from 'react'
import './Sidebar.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SidebarChannel from '../SidebarChannel/SidebarChannel';

const Sidebar = () => {
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
        </div>
    )
}

export default Sidebar
