import React from "react";
import "../sidebarrow.css";
import { Avatar } from "@mui/material";

function SidebarRow(props) {
  const { title, Icon, src } = props;
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );
}

export default SidebarRow;
