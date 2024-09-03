import { useAuthContext } from "../../context/AuthContext";
import { useState } from "react";
import useUpdateUniqueId from "../../hooks/useUpdateUniqueId";
import toast from "react-hot-toast";

const UpdateUniqueId = () => {
  const { authUser } = useAuthContext();
  const [uniqueId, setUniqueId] = useState(authUser.uniqueId);
  const { updateUniqueId, loading } = useUpdateUniqueId();

  const handleClick = (e) => {
    e.preventDefault();
    if (!validateData(uniqueId)) return;
    updateUniqueId(uniqueId);
  };

  const validateData = (uniqueId) => {
    const regEx = /^[0-9a-zA-Z]+$/;
    if (!regEx.test(uniqueId)) {
      toast.error("Unique ID can only have alphabets, and numbers.");
      return false;
    }
    if (uniqueId.length < 6) {
      toast.error("Unique ID must have at least 6 characters.");
      return false;
    }
    return true;
  };

  return (
    <div className="flex flex-col justify-center items-start">
      <p className="dark:text-white text-2xl m-3">Change Unique ID</p>
      <div className="flex justify-start w-full">
        <input
          type="text"
          defaultValue={authUser.uniqueId}
          className="input input-bordered w-1/2 max-w-xs"
          onChange={(e) => setUniqueId(e.target.value)}
        />
        <button
          className="btn btn-accent btn-md ms-2"
          onClick={handleClick}
          disabled={loading}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default UpdateUniqueId;
