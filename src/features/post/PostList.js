import { useSelector } from "react-redux";
import { getPostsError, getPostsStatus, selectAllPosts } from "./postSlice";
import "./PostList.css";
import PostExtract from "./PostExtract";

const PostList = () => {
  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  let content;
  if (postStatus === "loading") {
    content = <p>Loading........</p>;
  } else if (postStatus === "succeeded") {
    const sortedPosts = posts
      .slice()
      .sort((a, b) => new Date(b.date) - new Date(a.date));
    content = sortedPosts.map((post) => (
      <PostExtract post={post} key={post.id} />
    ));
  } else if (postStatus === "failed") {
    content = <p>{error}</p>;
  }

  return <section>{content}</section>;
};

export default PostList;
