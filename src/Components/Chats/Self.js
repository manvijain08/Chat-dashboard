import React from "react";
import sender from "../../Assets/sender.png";

const Self = ({ msgBody }) => {
  return (
    <div className="receiver">
      <div className="msgs-box">
        <p>{msgBody}</p>
      </div>
      <img src={sender} alt="receiver" />
    </div>
  );
};

export default Self;
