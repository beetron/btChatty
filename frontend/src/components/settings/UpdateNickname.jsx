import { useAuthContext } from "../../context/AuthContext";

const UpdateNickname = () => {
  const { authUser } = useAuthContext();

  return (
    <div className="flex flex-col justify-center items-start">
      <p className="dark:text-white text-2xl m-3">Change Display Name</p>
      <div className="flex justify-start w-full">
        <input
          type="text"
          defaultValue={authUser.nickname}
          className="input input-bordered w-1/2 max-w-xs"
          onChange={(e) => e.target.value}
        />
        <button className="btn btn-accent btn-md ms-2">Save</button>
      </div>
    </div>
  );
};

export default UpdateNickname;
