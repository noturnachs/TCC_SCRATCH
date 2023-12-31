import LoginForm from "./components/Login";
import RegistrationForm from "./components/RegistrationForm";
import ProtectedRoute from "./components/ProtectedRoute";
import GuestRoute from "./components/GuestRoute";
import SinglePost from "./components/SharePost";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Dashboard from "./components/dashboard";
import React, { useEffect } from "react";
import "./index.css";
import Store from "./components/Store";
import Welcome from "./components/Welcome";
import NotFound from "./components/NotFound";
import Profile from "./components/Profile";
import OrderSuccess from "./components/OrderSuccess";
import PasswordReset from "./components/PasswordReset"
const RedirectToLogin = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/api/login");
  }, []);
  return null;
};

const App = () => {


  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Welcome />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/" element={<Welcome />} />
        <Route path="/reset/:token" element={<PasswordReset />} />
        
        <Route
          path="/post/:id"
          element={
            <ProtectedRoute>
              <SinglePost />
            </ProtectedRoute>
          }
        />
        <Route
          path="/api/login"
          element={
            <GuestRoute>
              <LoginForm />
            </GuestRoute>
          }
        />
        <Route
          path="/api/register"
          element={
            <GuestRoute>
              <RegistrationForm />
            </GuestRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/store"
          element={
            <ProtectedRoute>
              <Store />
            </ProtectedRoute>
          }
        />
        <Route
          path="/success"
          element={
            <ProtectedRoute>
              <OrderSuccess />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
