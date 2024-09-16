import { useState } from "react";
import toast from "react-hot-toast";

const useAcceptFriendRequest = () => {
  const [loading, setLoading] = useState(false);

  const acceptFriendRequest = async (requesterUniqueId) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/users/acceptfriend/${requesterUniqueId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message);
      }
      toast.success("User added to friend list");
    } catch (error) {
      toast.error("Error approving friend request");
    } finally {
      setLoading(false);
    }
  };
  return { loading, acceptFriendRequest };
};

export default useAcceptFriendRequest;
