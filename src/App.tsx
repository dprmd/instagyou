import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/AuthPage/Login";
import Register from "./pages/AuthPage/Register";
import RootLayout from "./components/Layouts/RootLayout";
import HomePage from "./pages/HomePage/Index";
import NotFound from "./pages/Others/NotFound";
import Experimental from "./pages/Others/Experimental";
import ProfilePage from "./pages/ProfilePage/Index";
import useAuthStore from "./store/authStore";
import ProfilePost from "./components/Molecules/ProfilePost";

export default function App() {
  const authUser = useAuthStore((state) => state.user);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route
            path=""
            element={authUser ? <HomePage /> : <Navigate to="/auth/login" />}
          />
          <Route path="search" element={<Experimental />} />
          <Route path="explore" element={<Experimental />} />
          <Route path="reels" element={<Experimental />} />
          <Route path="messages" element={<Experimental />} />
          <Route path="notifications" element={<Experimental />} />
          <Route path="create-post" element={<Experimental />} />
          <Route path="/profile/:username/" element={<ProfilePage />}>
            <Route path="" element={<Experimental />} />
            <Route path="photos" element={<ProfilePost />} />
            <Route path="videos" element={<Experimental />} />
          </Route>
        </Route>
        <Route path="/auth">
          <Route
            path="login"
            element={!authUser ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="register"
            element={!authUser ? <Register /> : <Navigate to="/" />}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
