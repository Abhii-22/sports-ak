import React from 'react';
import './BottomNav.css';
import { FaHome, FaSearch, FaPlusSquare, FaYoutube, FaUser } from 'react-icons/fa';

const BottomNav = () => {
  return (
    <div className="bottom-nav">
      <div className="nav-item">
        <FaHome />
      </div>
      <div className="nav-item">
        <FaSearch />
      </div>
      <div className="nav-item">
        <FaPlusSquare />
      </div>
      <div className="nav-item">
        <FaYoutube />
      </div>
      <div className="nav-item">
        <FaUser />
      </div>
    </div>
  );
};

export default BottomNav;
