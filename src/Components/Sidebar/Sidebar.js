import "./Sidebar.scss";
import React from "react";
import apple from "../../Assets/apple.png";
import fb from "../../Assets/fb.png";
import instagram from "../../Assets/instagram.png";
import wp from "../../Assets/wp.png";
import search from "../../Assets/search.png";
import Sidebardata from "./Sidebardata.json";
import ChatItem from "./ChatItem";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="social-media">
        <div className="icons">
          <span className="all">ALL</span>
          <img src={apple} alt="apple-icon" />
          <img src={fb} alt="fb-icon" />
          <img src={instagram} alt="instagram-icon" />
          <img src={wp} alt="wp-icon" />
        </div>
      </div>

      <div className="chats">
        <h3>Chats</h3>
        <img src={search} alt="search" />
      </div>
      {Sidebardata.map((data) => (
        <ChatItem
          conversation_id = {data.conversation_id}
          c_name= {data.c_name}
          message_body={data.message_body}
          identifier={data.identifier}
          time={data.time}
          arrow={data.arrow}
        />
      ))}
    </div>
  );
};

export default Sidebar;
