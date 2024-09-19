import { useState } from "react";
import toast from "react-hot-toast";

const useRejectFriendRequest = () => {
  const [loading, setLoading] = useState(false);

  const rejectFriendRequest = async (requesterUniqueId) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/users/rejectfriend/${requesterUniqueId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message);
      }
      toast.success("User rejected");
    } catch (error) {
      toast.error("Error rejecting request");
    } finally {
      setLoading(false);
    }
  };
  return { loading, rejectFriendRequest };
};

export default useRejectFriendRequest;
