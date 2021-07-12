import React from "react";
// import DonutLargeIcon from '@material-ui/icons/DonutLarge';
// import ChatIcon from '@material-ui/icons/Chat';
import { Avatar, IconButton } from "@material-ui/core";
// import {SearchOutlined} from '@material-ui/core';
import SidebarChat from "./SidebarChat";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar src="https://avatars.githubusercontent.com/u/75858518?v=4" />
        <div className="sidebar_headerRight">
          <IconButton>BTN</IconButton>
        </div>
      </div>
      <div className="sidebar_search">
          <div className="sidebar_searchContainer">
              {/* <SearchOutlined/> */}
              <input type="text" placeholder="Search"/>
          </div>
      </div>
      <div className="sidebar_chats">
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
      </div>
    </div>
  );
};

export default SideBar;
