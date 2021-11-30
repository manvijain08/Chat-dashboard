import "./Sidebar.scss";
import React from "react";
import apple from "../../Assets/apple.png";
import fb from "../../Assets/fb.png";
import instagram from "../../Assets/instagram.png";
import wp from "../../Assets/wp.png";
import search from "../../Assets/search.png";
import profile from "../../Assets/profile.png";
import outgoing from "../../Assets/outgoing.png";
import smallA from "../../Assets/smallA.png";

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

      <div className="box">
        <div className="time">
          <img className="apple-icon" src={smallA} alt="apple-icon" />
          <p>11:33 pm</p>
        </div>

        <div className="inner-chats">
          <div>
            <img className="profile-chats" src={profile} alt="profile" />
          </div>

          <div className="content">
            <h3 className="content-heading">SP_Name</h3>
            <p className="content-para">Lorem ipsum is simply..</p>
          </div>
          <img className="arrow" src={outgoing} alt="outgoing-message" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
