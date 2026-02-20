import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import About from "./About";
import Contact from "./Contact";
import DashboardPage, {
  DashboardTasks,
  DashboardMessages,
} from "./DashBoardPage";
import PageNotFound from "./PageNotFound";
import PostsPage, { PostList, Post } from "./PostsPage";
import LoginForm from "./LoginForm";
import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage></HomePage>}></Route>
        <Route path="/login" element={<LoginForm></LoginForm>}></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route
          path="/Contact"
          element={
            <ProtectedRoute>
              <Contact></Contact>
            </ProtectedRoute>
          }
        ></Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/dash" element={<DashboardPage />}>
            <Route path="tasks" element={<DashboardTasks />} />
            <Route path="messages" element={<DashboardMessages />} />
          </Route>
        </Route>
        <Route path="/posts" element={<PostsPage></PostsPage>}>
          <Route index element={<PostList></PostList>}></Route>
          <Route path=":id" element={<Post></Post>}></Route>
        </Route>

        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </>
  );
}

export default AppRoutes;

{
  /* OR
        <Route path="/" element={<HomePage></HomePage>}></Route>           */
}
