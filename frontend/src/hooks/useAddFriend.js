import { useState } from "react";
import toast from "react-hot-toast";

const useAddFriend = () => {
  const [loading, setLoading] = useState(false);

  const addFriend = async (uniqueId) => {
    setLoading(true);

    try {
      const res = await fetch(`/api/users/addfriend/${uniqueId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error);
      }

      toast.success("Add request sent");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { addFriend, loading };
};

export default useAddFriend;
