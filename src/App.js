import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import Chat from "./Chat";
import Pusher from 'pusher-js';
import axios from "./axios";
import "./App.css";

function App() {
  const [messages,setMessages] = useState([]);


  useEffect(()=>{
    axios.get('/messages/sync').then((response)=>{
      setMessages(response.data)
    })
  },[])

  useEffect(()=>{
    const pusher = new Pusher('c86ffeb16624ef1955bd', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted',(data) => {
      // alert(JSON.stringify(data));
      setMessages([...messages, data])
    });
    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }
  },[messages])
  console.log(messages)
  return (
    <div className="app">
      <div className="app_body">
        <SideBar />
        <Chat messages={messages}/>
      </div>
    </div>
  );
}

export default App;
