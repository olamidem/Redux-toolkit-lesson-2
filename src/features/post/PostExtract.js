import React from "react";
import TimeAgo from "./TimeAgo";
import Reactions from "./Reactions";
import PostAuthor from "./PostAuthor";

const PostExtract = ({ post }) => {
  return (
    <article>
      <h3>{post.title}</h3>
      <p>{post.body.substring(0, 100)}</p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
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
