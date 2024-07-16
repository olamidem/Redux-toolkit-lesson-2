import AddPost from "./features/post/AddPost";
import PostList from "./features/post/PostList";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import SinglePostPage from "./features/post/SinglePostPage";
import EditPostForm from "./features/post/EditPostForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PostList />} />

        <Route path="post">
          <Route index element={<AddPost />} />
          <Route path=":postId" element={<SinglePostPage />} />
          <Route path="edit/:postId" element={<EditPostForm/>} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
