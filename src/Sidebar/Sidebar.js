import React, { useEffect, useState } from 'react'
import './Sidebar.css';
import { useSelector } from 'react-redux'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SidebarChannel from '../SidebarChannel/SidebarChannel';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Input } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';
import { selectUser } from '../features/userSlice';
import db, { auth } from '../firebase';

function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

const Sidebar = () => {


    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);


    const user = useSelector(selectUser)

    const [ channel, setChannel ] = useState([])
    const [ addChannel, setAddChannel ] = useState('')
    const [ error, setError ] = useState(false)
    const [ open, setOpen ] = useState(false)

    //MUESTRO Y MAPEO TODOS LOS CHANNELS
    useEffect(() => {
        db.collection('channels').onSnapshot(spanpshot => (
            setChannel(spanpshot.docs.map(doc => ({
                id: doc.id,
               channel: doc.data() 
            })))
        ))
    }, [])


    //AGREGO UN NUEVO CANAL
    const newChannel = (e) => {
        e.preventDefault();

        if(addChannel !== '') {
            // console.log("NO VACIO")
            db.collection('channels').add({
                channelName: addChannel
            })
        } else {
            setError(true)
            return
        } 
        setError(false)
        
        setAddChannel('')

        //Cierro el modal
        setOpen(false)


        
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
                    onClick={() => setOpen(true)}
                    className="sidebar-addChannel" 
                />   

            <Modal
                open={open}
                onClose={() => setOpen(false)}
                >
                <div style={modalStyle} className={classes.paper}>

                    {error ? <h5>Complete el campo</h5> : null}
                    <form onSubmit={newChannel} className="sidebar-form">
                        <Input 
                            type="text"
                            placeholder="Ingrese nombre del canal"
                            value={addChannel}
                            onChange={e => setAddChannel(e.target.value)}
                        />
                        
                        <Button type="submit">Agregar</Button>
                    </form>
                </div>
            </Modal>

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
