import { useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import useLogout from "./useLogout";

const useGetFriends = () => {
  const [loading, setLoading] = useState(false);
  const [friends, setFriends] = useState([]);
  const { logout } = useLogout();

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
    getFriends();
  }, []);
  return { loading, friends };
};

export default useGetFriends;
