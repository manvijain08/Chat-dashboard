import React from "react";
import _const from "../../const";
import profile from "../../Assets/profile.png";
import incomingDark from "../../Assets/incomingDark.png";
import incomingLight from "../../Assets/incomingLight.png";
import outgoingDark from "../../Assets/outgoingDark.png";
import outgoingLight from "../../Assets/outgoingLight.png";
import { Link } from "react-router-dom";

const ChatItem = ({ c_name, message_body, identifier, time, arrow, conversation_id }) => {
  return (
    <Link to = {`/chat/${conversation_id}`}>
      <div className="box">
      <div className="time">
        <img
          className="apple-icon"
          src={identifier === "APPLE" ? _const.APPLE_IMG_SM : null}
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
    </Link>
  );
};

export default ChatItem;
