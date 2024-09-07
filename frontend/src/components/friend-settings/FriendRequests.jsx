import FriendRequest from "./FriendRequest";
import useGetFriendRequests from "../../hooks/useGetFriendRequests";

const FriendRequests = () => {
  const { loading, friendRequests } = useGetFriendRequests();

  return (
    <>
      <div className="flex flex-col justify-center items-start">
        <p className="dark:text-white text-2xl m-3">Incoming Friend Requests</p>
      </div>
      <div className="flex flex-col justify-start w-full">
        {friendRequests.map((friendRequest) => (
          <FriendRequest
            key={friendRequest._id}
            friendRequest={friendRequest}
          />
        ))}
      </div>
    </>
  );
};

export default FriendRequests;
