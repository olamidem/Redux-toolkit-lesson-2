import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, selectAllPosts } from "./postSlice";
import "./PostList.css";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import Reactions from "./Reactions";

const PostList = () => {
  const posts = useSelector(selectAllPosts);
  const dispatch = useDispatch();


  const sortedPosts = posts
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const postList = sortedPosts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
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
  ));
  return (
    <section>
      <h2>Posts</h2>

      {postList}
    </section>
  );
};

export default PostList;
