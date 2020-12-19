import React from "react";
import { Button } from "reactstrap";
import "./button.scss";
function CustomButton(props) {
  return (
    <Button id="bt" color={props.color} onClick={props.onClick}>
      {props.children}
    </Button>
  );
}

export default CustomButton;
