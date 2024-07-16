import React, { useState } from "react";
import "./PostForm.css";
import { selectPostById, updatePost, deletePost } from "./postSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";
import { useNavigate, useParams } from "react-router-dom";

const EditPostForm = () => {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const navigate = useNavigate();

  const post = useSelector((state) => selectPostById(state, Number(postId)));
  const users = useSelector(selectAllUsers);

  const [title, setTitle] = useState(post?.title || "");
  const [content, setContent] = useState(post?.body || "");
  const [userId, setUserId] = useState(post?.userId || "");
  const [requestStatus, setRequestStatus] = useState("idle");

  const onTitleChanged = (e) => {
    setTitle(e.target.value);
  };

  const onAuthorChanged = (e) => {
    setUserId(e.target.value);
  };

  const onContentChanged = (e) => {
    setContent(e.target.value);
  };

  const canSave =
    [title, content, userId].every(Boolean) && requestStatus === "idle";

  const onSavePostClicked = async (e) => {
    e.preventDefault();
    if (canSave) {
      try {
        setRequestStatus("pending");
        await dispatch(
          updatePost({
            id: post.id, // Make sure to include the post ID
            title,
            body: content,
            userId,
            reactions: post.reactions,
          })
        ).unwrap();
        setTitle("");
        setContent("");
        setUserId("");
        navigate(`/post/${postId}`);
      } catch (error) {
        console.error("Failed to save the post", error);
      } finally {
        setRequestStatus("idle");
      }
    }
  };

  const onDeletePostClicked = async () => {
    try {
      setRequestStatus("pending");
      dispatch(deletePost({id:post.id})).unwrap();
      setTitle("");
      setContent("");
      setUserId("");
      navigate("/");
    } catch (error) {
      console.error("Failed to delete the post", error);
    } finally {
      setRequestStatus("idle");
    }
  };

  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section className="post-form">
      <h2>Edit Post</h2>
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
          value={userId} // Use value instead of defaultValue
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
        <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
          Save Post
        </button>
        <button type="button" onClick={onDeletePostClicked}>
          Delete Post
        </button>
      </form>
    </section>
  );
};

export default EditPostForm;
