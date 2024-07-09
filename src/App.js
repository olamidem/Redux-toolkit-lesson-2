import AddPost from "./features/post/AddPost";
import PostList from "./features/post/PostList";
import "./App.css";

function App() {
  return (
    <div className="container">
      <AddPost />
      <PostList />
    </div>
  );
}

export default App;
