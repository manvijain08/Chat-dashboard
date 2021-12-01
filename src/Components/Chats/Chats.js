import React from "react";
import "./Chats.scss";
import sender from "../../Assets/sender.png";
import receiver from "../../Assets/receiver.png";
import emoji from "../../Assets/emoji.png";
import attachment from "../../Assets/attachment.png";
import send from "../../Assets/send.png";

const Chats = ({selectedChat, setSelectedChat, conversation_id, sp_name, sp_num, r_name,r_num, message_body,time}) => {
  return (
    <div className="right-panel">
      <div className="current-profile">
        <div className="profile-dp">
          <img src={receiver} alt="profile" />
        </div>
        <div className="Cprofile-name">
          <h3 className="Cheader-heading">Sp_name</h3>
          <p className="Cheader-para">Profession</p>
        </div>
      </div>

      <div className="messages">

        <div className="sender">
          <img src={receiver} alt="profile" />
          <div className="msgg-box">
            <p>
              {message_body}
            </p>
          </div>
        </div>

        <div className="receiver">
            <div className="msgs-box">
            <p>
              {message_body}
            </p>
            </div>
            <img src={sender} alt="receiver"/> 
        </div>
      </div>

      <div className="send">
        <div className="emoticon">
          <div className = "attachment">
            <img src={emoji} alt="emoticon"/>
            <img src={attachment} alt="attachment"/>
          </div>

          <div className="send">
            <img src= {send} alt="send"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chats;

// {       
//   "conversation id": "3",
//   "c_name": "Yash Sharma",
//   "c_num" : "1234567890",
//   "r_name" : "Manvi Jain", 
//   "r_num" : "0987654321",
//   "message_body": {
//           "1234567890" : "Hello how are you manvi .. !!",
//           "0987654321" : "I am good Yash",
//           "0987654321" : "You say how are you ? ",
//           "1234567890" : "I am good too",
//           "1234567890" : "Where are you ?",
//           "0987654321" : "In my hometown having fun .. !!"
//   },
//   "identifier": "Messanger",
//   "time": "8:30 pm",
//   "arrow": "outgoingLight" 
// }
