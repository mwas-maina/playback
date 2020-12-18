import React from "react";
import "./navbar.scss";
import img from "../../img/playback.png";
import { BsPower } from "react-icons/bs";
function Navba() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={img} alt="plaback.ai logo" className="logo__img" />
        <h5 className="heading__medium">Playback</h5>
      </div>
      <nav className="user">
        <div className="user__email">netyakiza@test.com</div>
        <div className="user__name">E</div>
        <div className="power">
          <BsPower className="power__icon" />
        </div>
      </nav>
    </div>
  );
}
export default Navba;
