import React, { useState } from "react";
import { Tooltip as RSTooltip } from "reactstrap";
import "./tooltip.scss";
function Tooltip(props) {
  const { target, placement } = props;
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);
  return (
    <RSTooltip
      placement={placement}
      isOpen={tooltipOpen}
      target={target}
      toggle={toggle}
      className="tool"
      autohide={false}
    >
      {props.children}
    </RSTooltip>
  );
}
export default Tooltip;
