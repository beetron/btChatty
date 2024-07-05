import { useState } from "react";
import toast from "react-hot-toast";

const useSignup = () => {
  const [loading, setLoading] = useState(false);

  const signup = async ({ username, password, confirmPassword }) => {
    const isDataValid = validateData({ username, password, confirmPassword });
    if (!isDataValid) return;

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, confirmPassword }),
      });

      const data = await res.json();
      console.log(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignup;

function validateData({ username, password, confirmPassword }) {
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

  return true;
}
