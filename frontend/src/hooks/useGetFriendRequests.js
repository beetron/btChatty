import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const useGetFriendRequests = () => {
  const [loading, setLoading] = useState(false);
  const [friendRequests, setFriendRequests] = useState([]);

  useEffect(() => {
    const getFriendRequests = async () => {
      setLoading(true);

      try {
        const res = await fetch("/api/users/friendrequests", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await res.json();

        if (data.error) {
          throw new Error(data.error);
        }
        setFriendRequests(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    getFriendRequests();
  }, []);
  return { loading, friendRequests };
};

export default useGetFriendRequests;
