import React from 'react';
import Chat from "./chat/chat";
import Process from "./process/process";
import './App.scss';
import { BrowserRouter as Router, Routes as Switch, Route, useParams } from "react-router-dom";
import Home from "./home/home";
import io from "socket.io-client";
const socket = io("http://127.0.0.1:8001");

function Appmain() {
  let { username, roomname } = useParams()
  return (
    <React.Fragment>
      <div className='right'>
        <Chat
          username={username}
          roomname={roomname}
          socket={socket}
          />
      </div>
      <div className='left'>
        <Process />
      </div>
      
    </React.Fragment>    
  );
}
function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/' element={<Home socket={socket} />} exact />
          <Route path='chat'>
            <Route path=':roomname'>
              <Route path=':username' element={<Appmain />} />
            </Route>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
