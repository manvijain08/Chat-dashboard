import React from "react";
import receiver from "../../Assets/receiver.png";

const Other = ({ msgBody }) => {
  return (
    <div className="sender">
      <img className="receiver-dp" src={receiver} alt="profile" />
      <div className="msgg-box">
        <p className="receiver-msg">{msgBody}</p>
      </div>
    </div>
  );
};

export default Other;
