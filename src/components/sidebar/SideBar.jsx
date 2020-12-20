import React from "react";
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
import { Link } from "react-router-dom";

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
      <div>
        <BsSubtract className="sidebar__icon" />
      </div>
      <div>
        <BsInboxesFill
          className="sidebar__icon sidebar__icon--active"
          id="tool"
        />
        <Tooltip placement="right" target="tool" placement="right">
          <div className="itemlist">
            <li className="itemlist__items">
              <Link to="/" className="link-to">
                Category page
              </Link>
            </li>
            <li className="itemlist__items">
              <Link to="/category-products" className="link-to">
                Products page
              </Link>
            </li>
            <li className="itemlist__items">
              <Link to="/" className="link-to">
                Products page
              </Link>
            </li>
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
