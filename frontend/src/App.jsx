import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import Messages from "./pages/messages/Messages";
import Settings from "./pages/settings/Settings";

function App() {
  const { authUser } = useAuthContext();
  return (
    <div className="min-h-screen w-full flex items-start justify-center">
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Login />} />
        <Route path="/messages" element={authUser ? <Messages /> : <Login />} />
        <Route path="/settings" element={authUser ? <Settings /> : <Login />} />
        <Route path="/login" element={authUser ? <Home /> : <Login />} />
        <Route path="/signup" element={authUser ? <Home /> : <SignUp />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
