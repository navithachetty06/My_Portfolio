import React, { useState } from 'react';
import Home from '../../pages/Home/Home';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import "./Layout.css";
import Menu from '../Menus/Menu'; // Ensure this is correctly imported

const Layout = () => {
  const [toggle, setToggle] = useState(true); // Initialization of state

  const handleToggle = () => {
    setToggle(!toggle); // Correct toggle functionality
  };

  return (
    <div className="sidebar-section">
      <div className={toggle ? "sidebar" : "sidebar sidebar-toggle"}>
        <div className="sidebar-toggle-icons">
          <p onClick={handleToggle}>
            {toggle ? (
              <FaArrowAltCircleLeft size={30} />
            ) : (
              <FaArrowAltCircleRight size={30} />
            )}
          </p>
        </div>
        <Menu toggle={toggle}/> {/* Make sure Menu is inside the sidebar div to toggle with it */}
      </div>
      <div className={toggle ? "container container-expanded" : "container container-collapsed"}>
        <Home />
      </div>
    </div>
  );
};

export default Layout;
