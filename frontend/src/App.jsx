import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import { useEffect } from "react";
import OneSignal from "react-onesignal";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import Messages from "./pages/messages/Messages";
import Settings from "./pages/settings/Settings";
import FriendSettings from "./pages/friend-settings/FriendSettings";

function App() {
  // OneSignal initialization for notifications
  useEffect(() => {
    (async () => {
      OneSignal.init({
        appId: process.env.ONESIGNAL_APP_ID,
      });
    })();
  }, []);

  const { authUser } = useAuthContext();

  return (
    <div className="min-h-screen w-full flex items-start justify-center">
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Login />} />
        <Route path="/messages" element={authUser ? <Messages /> : <Login />} />
        <Route path="/settings" element={authUser ? <Settings /> : <Login />} />
        <Route path="/login" element={authUser ? <Home /> : <Login />} />
        <Route path="/signup" element={authUser ? <Home /> : <SignUp />} />
        <Route
          path="/friend-settings"
          element={authUser ? <FriendSettings /> : <Login />}
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
