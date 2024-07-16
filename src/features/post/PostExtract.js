// features/post/PostExtract.js
import React from "react";
import { Link } from "react-router-dom";
import TimeAgo from "./TimeAgo";
import Reactions from "./Reactions";
import PostAuthor from "./PostAuthor";
import "./PostExtract.css"; // Make sure to import the CSS file

const PostExtract = ({ post }) => {
  return (
    <article>
      <h3>{post.title}</h3>
      <p>{post.body.substring(0, 100)}</p>
      <div className="post-details">
        <p className="post-link">
          <Link to={`post/${post.id}`}>View Post</Link>
        </p>
        <p className="post-author">
          <PostAuthor userId={post.userId} />
        </p>
        <p className="post-time">
          <TimeAgo timestamp={post.date} />
        </p>
      </div>
      <Reactions post={post} />
    </article>
  );
};

export default PostExtract;
