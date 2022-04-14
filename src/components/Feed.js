import React, { useState, useEffect } from "react";
import "../feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from "../firebase";
import {
  collection,
  getDocs,
  doc,
  orderBy,
  query,
  onSnapshot,
} from "firebase/firestore";

function Feed() {
  const [posts, setPosts] = useState([]);

  const getData = () => {};

  useEffect(() => {
    // getData();
    const q = query(collection(db, "post"), orderBy("timestamp", "desc"));
    const docs = onSnapshot(q, (snapshot) =>
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    );
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {posts.map((post, idx) => (
        <Post
          key={idx}
          profileSrc={post.data.profilePic}
          username={post.data.username}
          timestamp={post.data.timestamp}
          message={post.data.message}
          image={post.data.image}
        />
      ))}
    </div>
  );
}

export default Feed;
