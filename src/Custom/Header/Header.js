import "./Header.scss";
import React from "react";
import logo from "../../Assets/logo-1.png";
import profile from "../../Assets/header-profile.png";

const Header = ({profileCardVisible, setProfileCardVisible}) => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="header-profile">
        <div onClick = {() => setProfileCardVisible(!profileCardVisible)} className="profile-picture">
          <img src={profile} alt="profile" />
        </div>
        <div className="profile-name">
          <h4 className="header-heading">Sp_name</h4>
          <p className="header-para">Profession</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
