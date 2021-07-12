import React from 'react';
import { Avatar } from '@material-ui/core';
import './SideBarChat.css';

const SidebarChat = () => {
    return (
        <div className="sidebarChat">
            <Avatar/>
            <div className="sidebarChat_info">
                <h1>Person Name</h1>
                <h2>Last Message</h2>
            </div>
        </div>
    )
}

export default SidebarChat
