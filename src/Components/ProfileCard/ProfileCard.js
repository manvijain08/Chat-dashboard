import React from 'react';
import receiver from "../../Assets/receiver.png";
import msg from "../../Assets/msg.png";
import call from "../../Assets/call.png";

const ProfileCard = () => {
    return (
        <div className = "ProfileCard">
            <div className="background">

            </div>
            <img src = {receiver} alt="profile"/>

            <div className="details">
                <h4>Manvi Jain</h4>
                <p>XYZ@gmail.com</p>
                <p>+91 1234569870</p>
            </div>

            <div className="call">
                <img src={msg} alt="messages"/>
                <img src={call} alt = "call"/>
            </div>
        </div>
    )
}

export default ProfileCard
