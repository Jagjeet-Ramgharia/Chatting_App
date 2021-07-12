import React, { useState } from "react";
import { Avatar, IconButton } from "@material-ui/core";
// import {SearchOutlined} from '@material-ui/icons';
import axios from "./axios";
import "./Chat.css";
import { now } from "mongoose";

const Chat = ({ messages }) => {
  const [input, setInput] = useState("");

  const sendMessage = async(e) =>{
    await axios.post('/messages/new', {
      name : "DejaVu",
      message : input,
      timestamp : "just now",
      received: true
    })
  }
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar />
        <div className="chatHeader_info">
          <h3>Name</h3>
          <p>Last Seen</p>
        </div>
        <div className="chatHeader_right">
          <IconButton>{/* <SearchOutlined/> */}c</IconButton>
          <IconButton>c</IconButton>
          <IconButton>c</IconButton>
        </div>
      </div>
      <div className="chat_body">
        {messages.map((message) => (
          <p className={`chat_message ${message.received && "chat_receiver"} `}>
            <span className="chat_name">{message.name}</span>
            {message.message}
            <span className="chat_timing">{message.timestamp}</span>
          </p>
        ))}

        {/* <p className="chat_message chat_receiver">
          <span className="chat_name">Jagjeet</span>
          This is the Message
          <span className="chat_timing">{new Date().toUTCString()}</span>
        </p> */}
      </div>
      <div className="chat_footer">
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Type a Message"
          />
          <button onClick={sendMessage} type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
