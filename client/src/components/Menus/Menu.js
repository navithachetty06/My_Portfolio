import React from 'react';
import './Menu.css';
import { FcHome, FcAbout, FcBusinesswoman, FcAndroidOs, FcReading, FcPortraitMode, FcContacts } from "react-icons/fc";
import { MdLibraryBooks } from "react-icons/md";

const Menu = ({ toggle }) => {
  return (
    <div>
      {toggle && (
        <div className="navbar-profile-pic">
          <img src="/Images/Navitha-1.png" alt="Profile Pic"/>
        </div>
      )}
      <div className="nav-items">
        <div className="nav-item">
          <div className="nav-link">
            <FcHome title="Home" />
            {toggle && "Home"}
          </div>
          <div className="nav-link">
            <FcAbout title="About me"/>
            {toggle && "About"}
          </div>
          <div className="nav-link">
            <FcBusinesswoman title= "Work Experience" />
            {toggle && "Work Experience"}
          </div>
          <div className="nav-link">
            <FcAndroidOs title="Technology Stack" />
            {toggle && "Tech Stack"}
          </div>
          <div className="nav-link">
            <FcReading title="My Education" />
            {toggle && "Education"}
          </div>
          <div className="nav-link">
            <FcPortraitMode title="My Projects" />
            {toggle && "Projects"}
          </div>
          <div className="nav-link">
            <MdLibraryBooks title="My Resume" />
            {toggle && "Resume"}
          </div>
          <div className="nav-link">
            <FcContacts title="Contact Details"/>
            {toggle && "Contact Details"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
