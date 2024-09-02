import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useUpdateUniqueId = () => {
  const { authUser, setAuthUser } = useAuthContext();
  const [loading, setLoading] = useState(false);

  const updateUniqueId = async (uniqueId) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/users/updateuniqueid/${uniqueId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      // Update the nickname in the authUser object
      const updatedAuthUser = { ...authUser, uniqueId };

      // Save the updated authUser object to local storage
      localStorage.setItem("btchatty-user", JSON.stringify(updatedAuthUser));

      // Update the authUser state
      setAuthUser(updatedAuthUser);

      toast.success("Unique ID Changed!");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { updateUniqueId, loading };
};

export default useUpdateUniqueId;
