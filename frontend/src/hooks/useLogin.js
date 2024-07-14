import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { setAuthUser } = useAuthContext();

  const login = async ({ username, password }) => {
    setLoading(true);
    setError(null);

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

      console.log(data);

      // Check data for errors
      if (data.error) {
        setError(data.error);
        toast.error(data.error);
        return;
      }

      // Store user to local storage
      localStorage.setItem("btchatty-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      setError(error.ToString());
      toast.error(error.toString());
    } finally {
      setLoading(false);
    }
  };
  return { loading, login, error };
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
