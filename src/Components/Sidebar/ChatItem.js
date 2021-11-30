import React from "react";
import smallA from "../../Assets/smallA.png";
import smallfb from "../../Assets/smallfb.png";
import smalli from "../../Assets/smalli.png";
import smallW from "../../Assets/smallW.png";
import profile from "../../Assets/profile.png";
import incomingDark from "../../Assets/incomingDark.png";
import incomingLight from "../../Assets/incomingLight.png";
import outgoingDark from "../../Assets/outgoingDark.png";
import outgoingLight from "../../Assets/outgoingLight.png";

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
