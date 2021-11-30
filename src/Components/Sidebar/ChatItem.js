import React from "react";
import apple from "../../Assets/apple.png";
import fb from "../../Assets/fb.png";
import instagram from "../../Assets/instagram.png";
import wp from "../../Assets/wp.png";
import search from "../../Assets/search.png";
import profile from "../../Assets/profile.png";
import incomingDark from "../../Assets/incomingDark.png";
import incomingLight from "../../Assets/incomingLight.png";
import outgoingDark from "../../Assets/outgoingDark.png";
import outgoingLight from "../../Assets/outgoingLight.png";
import smallA from "../../Assets/smallA.png";

const ChatItem = ({ c_name, message_body, identifier, time, arrow }) => {
  return (
    <div className="box">
      <div className="time">
        <img
          className="apple-icon"
          src={identifier === "apple" ? smallA : null}
          alt="apple-icon"
        />
        <p>{time}</p>
      </div>

      <div className="inner-chats">
        <div>
          <img className="profile-chats" src={profile} alt="profile" />
        </div>

        <div className="content">
          <h3 className="content-heading">{c_name}</h3>
          <p className="content-para">{message_body}</p>
        </div>
        <img
          className="arrow"
          src={
            arrow === "incomingLight"
              ? incomingLight
              : arrow === "incomingDark"
              ? incomingDark
              : arrow === "outgoingDark"
              ? outgoingDark
              : arrow === "outgoingLight"
              ? outgoingLight
              : null
          }
          alt="outgoing-message"
        />
      </div>
    </div>
  );
};

export default ChatItem;
