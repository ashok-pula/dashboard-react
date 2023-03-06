import React from "react";
import "./topbar.css";

import { Language, NotificationsNone, Settings } from "@mui/icons-material";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topbarLeft">
          <span className="topbarLogo">Ashokdashboard</span>
        </div>
        <div className="topbarRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topbarBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topbarBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://wallpapers.com/images/featured/7qmw7zoynhqh9g0z.jpg"
            alt=""
            className="topbarImage"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
