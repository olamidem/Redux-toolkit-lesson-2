import React, { useState } from "react";
import "./PostForm.css";
import { addPost } from "./postSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

const AddPost = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);
  const [title, setTitle] = useState("");
  const [content, setContect] = useState("");
  const [userId, setUserId] = useState("");

  const onTitleChanged = (e) => {
    setTitle(e.target.value);
  };

  const onAuthorChanged = (e) => {
    setUserId(e.target.value);
  };

  const onContentChanged = (e) => {
    setContect(e.target.value);
  };

  const onSavePostClicked = (e) => {
    e.preventDefault();
    if (title && content) {
      dispatch(addPost(title, content, userId));
      setTitle("");
      setContect("");
      setUserId("");
    }
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section className="post-form">
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          required
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postAuthor">Author:</label>
        <select
          id="postAuthor"
          required
          value={userId}
          onChange={onAuthorChanged}
        >
          <option value="">Select an author</option>
          {userOptions}
        </select>
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          required
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="submit" onClick={onSavePostClicked} disabled={!canSave}>
          Add Post
        </button>
      </form>
    </section>
  );
};

export default AddPost;
