import { React, useState } from "react";
import Filter from "bad-words";
import "../messagesender.css";
import { Avatar } from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import { useStateValue } from "../stateProvider";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import db from "../firebase";

function MessageSender() {
  const [{ user }, dispatch] = useStateValue();
  var customFilter = new Filter({ placeHolder: "❌" });

  const [input, setInput] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "post", ""), {
      username: user.displayName,
      profilePic: user.photoURL,
      image: imgUrl,
      message: customFilter.clean(input),
      timestamp: Timestamp.now(),
    });

    setInput("");
    setImgUrl("");
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />

        <form action="">
          <input
            value={input}
            className="messageSender__input"
            type="text"
            placeholder={`What's on your mind ${user.displayName}?`}
            onChange={(input) => setInput(input.target.value)}
          />
          <input
            type="text"
            placeholder="Image URL(Optional)"
            value={imgUrl}
            onChange={(url) => setImgUrl(url.target.value)}
          />

          <button onClick={handleSubmit} type="submit">
            Hidden submit
          </button>
        </form>
      </div>

      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>

        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>

        <div className="messageSender__option">
          <EmojiEmotionsOutlinedIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
