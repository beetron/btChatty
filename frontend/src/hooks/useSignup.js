import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({ username, password, confirmPassword, uniqueId }) => {
    const isDataValid = validateData({
      username,
      password,
      confirmPassword,
      uniqueId,
    });
    if (!isDataValid) return;

    setLoading(true);

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, confirmPassword, uniqueId }),
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

  return { loading, signup };
};

export default useSignup;

function validateData({ username, password, confirmPassword, uniqueId }) {
  // Regex patterns 0-9, a-z, A-Z, !@#$%^&*, no 2-byte characters
  const regEx = /^[0-9a-zA-Z!@#$%^&*]+$/;
  if (regEx.test(username) || regEx.test(password)) {
    toast.error(
      "Usernname/Password can only have alphabets, numbers, and !@#$%^&*. No 2-byte characters allowed."
    );
    return false;
  }
  if (
    password.length < 6 ||
    confirmPassword.length < 6 ||
    username.length < 6
  ) {
    toast.error("Username/Password must be at least 6 characters");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }

  if (!uniqueId) {
    toast.error("Unique ID is missing");
    return false;
  }

  return true;
}
