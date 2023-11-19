import { Routes, Route } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import { DashboardMessages, DashboardTasks } from "../pages/DashboardPage";
import Homepage from "../pages/HomePage";
import PageNotFound from "../pages/PageNotFound";
import AboutPage from "../pages/AboutPage";
import PostsPage, { Post, PostList } from "../pages/PostsPage";
import ProtectedRoute from "./ProtectedRoute";
import LoginFormPage from "../pages/LoginFormPage";

// special component containing all the possible routes for this app
// any props passed into AppRoutes will also be passed onto
// child components using {...props}
function AppRoutes(props) {
  return (
    <Routes>
      {/* index matches on default/home URL: / */}
      <Route index element={<Homepage {...props} />} />
      {/* nested routes, matches on /dash/tasks etc */}

      {/* // update AppRoutes.jsx to protect the Dashboard */}
      <Route
        path="dash"
        element={
          <ProtectedRoute>
            <DashboardPage {...props} />
          </ProtectedRoute>
        }
      >
        <Route path="messages" element={<DashboardMessages />} />
        <Route path="tasks" element={<DashboardTasks />} />
      </Route>
      <Route path="login" element={<LoginFormPage />} />
      {/* <Route path="dash" element={<DashboardPage {...props} />}> */}
        <Route path="messages" element={<DashboardMessages />} />
        <Route path="tasks" element={<DashboardTasks />} />
      {/* </Route> */}
      <Route path="/about" element={<AboutPage {...props} />} />
      {/* // add to AppRoutes.jsx
// add new Route branch to AppRoutes.jsx */}
      <Route path="/posts" element={<PostsPage {...props} />}>
        <Route index element={<PostList />} />
        {/* dynamic param taken from route, stored in variable called id */}
        <Route path=":id" element={<Post />} />
      </Route>
      {/* special route to handle if none of the above match */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
export default AppRoutes;
// Name this file AppRoutes.jsx and store in new folder 'routes'
