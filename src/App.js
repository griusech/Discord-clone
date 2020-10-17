import React from 'react';
import Sidebar from './Sidebar/Sidebar'
import { useSelector } from 'react-redux'
import './App.css';
import Chat from './Chat/Chat';
import Logos from './Logos/Logos';
import { selectUser } from './features/userSlice'
import Login from './Login/Login';

function App() {

  const user = useSelector(selectUser)

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
