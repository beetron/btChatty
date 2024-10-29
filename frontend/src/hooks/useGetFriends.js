import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import useLogout from "./useLogout";
import friendStore from "../store/friendStore";

const useGetFriends = () => {
  const [loading, setLoading] = useState(false);
  const [friends, setFriends] = useState([]);
  const { recentMessages } = friendStore();
  const { logout } = useLogout();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        setIsVisible(true);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    const getFriends = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/users/friendlist", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await res.json();

        if (data.error) {
          // log user out if error
          logout();
          throw new Error(data.error);
        }
        setFriends(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (isVisible) {
      getFriends();
      setIsVisible(false);
    }
  }, [recentMessages, isVisible, logout]);

  return { loading, friends };
};

export default useGetFriends;
