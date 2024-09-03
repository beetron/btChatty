import { useState } from "react";
import toast from "react-hot-toast";
import useAddFriend from "../../hooks/useAddFriend";

const AddFriend = () => {
  const [uniqueId, setUniqueId] = useState(null);
  const { addFriend, loading } = useAddFriend();

  const handleClick = (e) => {
    e.preventDefault();
    if (!uniqueId || uniqueId.length < 6) {
      return toast.error("Unique ID are minimum 6 characters long.");
    }
    addFriend(uniqueId);
  };

  return (
    <div className="flex flex-col justify-center items-start">
      <p className="dark:text-white text-2xl m-3">Add Friend</p>
      <div className="flex justify-start w-full">
        <input
          type="text"
          placeholder="Enter friend's unique ID"
          className="input input-bordered w-1/2 max-w-xs"
          onChange={(e) => setUniqueId(e.target.value)}
        />
        <button
          className="btn btn-accent btn-md ms-2"
          onClick={handleClick}
          disabled={loading}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddFriend;
