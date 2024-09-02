import { useAuthContext } from "../../context/AuthContext";

const UpdateUniqueId = () => {
  const { authUser } = useAuthContext();

  return (
    <div className="flex flex-col justify-center items-start">
      <p className="dark:text-white text-2xl m-3">
        Change UniqueId <br />
        (Used for friend requests)
      </p>
      <div className="flex justify-start w-full">
        <input
          type="text"
          defaultValue={authUser.uniqueId}
          className="input input-bordered w-1/2 max-w-xs"
          onChange={(e) => e.target.value}
        />
        <button className="btn btn-accent btn-md ms-2">Save</button>
      </div>
    </div>
  );
};

export default UpdateUniqueId;
