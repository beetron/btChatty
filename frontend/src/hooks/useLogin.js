import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async ({ username, password }) => {
    setLoading(true);

    const isDataValid = validateData({ username, password });
    if (!isDataValid) {
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      // Check data for errors
      if (data.error) {
        throw new Error(data.error);
      }

      // Store user to local storage
      localStorage.setItem("btchatty-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, login };
};

export default useLogin;

// Check if both username and password are provided
function validateData({ username, password }) {
  if (!username || !password) {
    toast.error("Missing username or password");
    return false;
  }
  return true;
}
