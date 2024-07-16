import React from "react";
import { useSelector } from "react-redux";
import { selectPostById } from "./postSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import Reactions from "./Reactions";
import { Link, useParams } from "react-router-dom";
import "./PostList.css";

const SinglePostPage = () => {
  const { postId } = useParams();
  const post = useSelector((state) => selectPostById(state, Number(postId)));

  if (!post) {
    return (
      <section>
        <h2>Post not found</h2>
      </section>
    );
  }

  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.body.substring(0, 100)}</p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p className="post-link">
          <Link to={`/post/edit/${postId}`}>Edit Post</Link>
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

export default SinglePostPage;
