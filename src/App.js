import React, { useEffect } from 'react';
import Sidebar from './Sidebar/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import './App.css';
import Chat from './Chat/Chat';
import Logos from './Logos/Logos';
import { selectUser } from './features/userSlice'
import Login from './Login/Login';
import { auth } from './firebase';
import { login, logout } from './features/userSlice'

function App() {

  const dispatch = useDispatch();
  const user = useSelector(selectUser)

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log(authUser)
      if(authUser) {
        // El usuario se logueo
        dispatch(
          login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName
        }))
      }
      else {
        // El usuario no esta logueado
      }
    })
    
  }, [])

  return (
    <div className="app">

      {user ? (
        <>
          {/* <Logos /> */}
    
          <Sidebar /> 
    
          <Chat />
        </>
      ) : (
        <Login />
      )}


    </div>
  );
}

export default App;
