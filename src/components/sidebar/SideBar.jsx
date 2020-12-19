import React, { useState } from "react";
import "./sidebar.scss";
import {
  BsFillCameraVideoFill,
  BsFillHouseDoorFill,
  BsFillPeopleFill,
  BsLayoutSidebar,
  BsSubtract,
  BsInboxesFill,
  BsTablet,
  BsGrid3X3GapFill,
} from "react-icons/bs";
import Tooltip from "../tooltip/Tooltip";

const SideBar = () => {
  return (
    <nav className="sidebar">
      <div>
        <BsFillCameraVideoFill className="sidebar__icon" />
      </div>
      <div>
        <BsFillHouseDoorFill className="sidebar__icon" />
      </div>
      <div>
        <BsFillPeopleFill className="sidebar__icon" />
      </div>
      <div>
        <BsLayoutSidebar className="sidebar__icon" />
      </div>
      <div className="bs">
        <BsSubtract className="sidebar__icon" />
      </div>
      <div>
        <BsInboxesFill className="sidebar__icon" id="tool" />
        <Tooltip placement="right" target="tool" placement="right">
          <div className="itemlist">
            <li className="itemlist__items">Category page</li>
            <li className="itemlist__items">Products page</li>
            <li className="itemlist__items">Linesheets</li>
          </div>
        </Tooltip>
      </div>
      <div>
        <BsTablet className="sidebar__icon" />
      </div>
      <div>
        <BsGrid3X3GapFill className="sidebar__icon" />
      </div>
    </nav>
  );
};
export default SideBar;
