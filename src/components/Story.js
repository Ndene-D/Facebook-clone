import React from "react";
import "../story.css";
import { Avatar } from "@mui/material";

function Story(props) {
  const { image, profileSrc, title } = props;
  return (
    <div className="story" style={{ backgroundImage: `url(${image})` }}>
      <Avatar className="story__avatar" src={profileSrc} />
      <h4>{title}</h4>
    </div>
  );
}

export default Story;
