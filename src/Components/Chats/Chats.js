import React from "react";
import "./Chats.scss";
import sender from "../../Assets/sender.png";
import receiver from "../../Assets/receiver.png";
import emoji from "../../Assets/emoji.png";
import attachment from "../../Assets/attachment.png";
import send from "../../Assets/send.png";
import Self from "./Self";
import Other from "./Other";
import msgData from "./messages.json";

const Chats = ({ selectedChat }) => {
  return (
    <div className="right-panel">
      <div className="current-profile">
        <div className="profile-dp">
          <img src={receiver} alt="profile" />
        </div>
        <div className="Cprofile-name">
          <h3 className="Cheader-heading">Sp_name</h3>
          <p className="Cheader-heading">Profession</p>
        </div>
      </div>

      <div className="messages">
        {msgData.map((data) => {
          if (data.conversation_id == selectedChat) {
            return data.message_body.map((msg) => {
              if (msg.selfSent) {
                return <Self msgBody={msg.message} />;
              } else {
                return <Other msgBody={msg.message} />;
              }
            });
          }
        })}
      </div>

      <div className="send">
        <div className="emoticon">
          <div className="attachment">
            <img className="emoji" src={emoji} alt="emoticon" />
            <img src={attachment} alt="attachment" />
          </div>

          <div className="send-tick">
            <img src={send} alt="send" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chats;
