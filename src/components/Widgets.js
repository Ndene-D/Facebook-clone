import React from "react";
import "../widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <iframe
        title="fb-widget"
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fexplorefeed%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        style={{ border: "none", overflow: "hidden", height: "100vh" }}
        scrolling="no"
        frameborder="0"
        allow=" encrypted-media"
      ></iframe>
    </div>
  );
}

export default Widgets;
