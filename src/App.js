import React from 'react';
import Sidebar from './Sidebar/Sidebar'
import './App.css';
import Chat from './Chat/Chat';
import Logos from './Logos/Logos';

function App() {
  return (
    <div className="app">

      {/* <Logos /> */}

      <Sidebar /> 

      <Chat />

    </div>
  );
}

export default App;
