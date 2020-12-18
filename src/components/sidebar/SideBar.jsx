import React from "react";
import "./sidebar.scss";
import { BsFillCameraVideoFill } from "react-icons/bs";

const SideBar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <BsFillCameraVideoFill />
        </li>
        <li>
          <BsFillCameraVideoFill />
        </li>
        <li>
          <BsFillCameraVideoFill />
        </li>
        <li>
          <BsFillCameraVideoFill />
        </li>
        <li>
          <BsFillCameraVideoFill />
        </li>
        <li>
          <BsFillCameraVideoFill />
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
