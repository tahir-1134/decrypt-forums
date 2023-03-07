import { Avatar } from "@mui/material";
import React, { forwardRef, useState } from "react";
import InputOption from "./InputOption";
import "./Post.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";

const Post = forwardRef(
  (
    { name, description, message, photoURL, media, timestamp, comments, likes },
    ref
  ) => {
    const [isLiked, setIsLiked] = useState(false);

    function handleLike() {
      setIsLiked(!isLiked);
    }
    const currentTime = new Date().getTime() / 1000;
    let postTime = currentTime - timestamp?.seconds;

      if (Math.floor(postTime / 60) < 60) {
        postTime = Math.floor(postTime / 60);
        timestamp = `${postTime} minutes ago`
      } else if (Math.floor(postTime / 3600) < 24){
        postTime = Math.floor(postTime / 3600);
        timestamp = `${postTime} hours ago`
      } else if (Math.floor(postTime/ 86400) < 365) {
        postTime = Math.floor(postTime/ 86400);
        timestamp = `${postTime} days ago`
      }

    return (
      <div ref={ref} className="post">
        <div className="post__header">
          <Avatar src={photoURL} />
          <div className="post__info">
            <h2>{name} | <small>{timestamp}</small></h2>
            <p>{description}</p>
          </div>
        </div>
        <div className="post__body">
          <p>{message}</p>
          {media && <img className="post__media" src={media} alt="Media" />}
        </div>
        <div className="post__buttons">
          <InputOption
            Icon={ThumbUpIcon}
            title="Likes"
            status={likes?.length}
            color={isLiked ? "#1C98ED" : "lightgray"}
            onClick={handleLike}
          />
          <InputOption
            Icon={ChatIcon}
            title="Comments"
            status={comments?.length}
            color="lightgray"
          />
          <InputOption Icon={ShareIcon} title="Share" color="lightgray" />
          <InputOption Icon={SendIcon} title="Send" color="lightgray" />
        </div>
      </div>
    );
  }
);

export default Post;
