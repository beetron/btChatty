import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import useUpdateNickname from "../../hooks/useUpdateNickname";
import toast from "react-hot-toast";

const UpdateNickname = () => {
  const { authUser } = useAuthContext();
  const { updateNickname, loading } = useUpdateNickname();
  const [nickname, setNickname] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nickname) {
      return toast.error("Nicknames can't be empty!");
    }
    updateNickname(nickname);
  };

  return (
    <div className="flex flex-col justify-center items-start">
      <p className="dark:text-white text-2xl m-3">Change Display Name</p>
      <div className="flex justify-start w-full">
        <input
          type="text"
          defaultValue={authUser.nickname}
          className="input input-bordered w-1/2 max-w-xs"
          onChange={(e) => setNickname(e.target.value)}
        />
        <button
          className="btn btn-accent btn-md ms-2"
          onClick={handleSubmit}
          disabled={loading}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default UpdateNickname;
