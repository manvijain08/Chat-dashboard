import React from "react";
import receiver from "../../Assets/receiver.png";

const Other = ({ msgBody }) => {
  return (
    <div className="sender">
      <img src={receiver} alt="profile" />
      <div className="msgg-box">
        <p>{msgBody}</p>
      </div>
    </div>
  );
};

export default Other;
