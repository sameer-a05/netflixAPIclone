import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import SidebarOption from './SidebarOption'; 
import "./Sidebar.css";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <h4>Menu</h4>
      <div className="sidebar__top">
        <Link to="/">
          <SidebarOption 
            icon={<i className="fas fa-house"></i>} 
            text="Home" 
            active={location.pathname === "/"} 
          />
        </Link>

        <Link to="/movies">
          <SidebarOption 
            icon={<i className="fas fa-film"></i>} 
            text="Movies" 
            active={location.pathname === "/movies"} 
          />
        </Link>
      </div>

      <div className="sidebar__bottom">
        <SidebarOption 
          icon={<i className="fas fa-gear"></i>} 
          text="Settings" 
          nocursor 
        />
        <SidebarOption 
          icon={<i className="fas fa-question"></i>} 
          text="Help" 
          nocursor 
        />
      </div>
    </div>
  );
};

export default Sidebar;
