import "./Header.scss";
import React from "react";
import logo from "../../Assets/logo.png";
import profile from "../../Assets/profile.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="header-profile">
        <div className="profile-picture">
          <img src={profile} alt="profile" />
        </div>
        <div className="profile-name">
          <h3 className="header-heading">Sp_name</h3>
          <p className="header-para">Profession</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
