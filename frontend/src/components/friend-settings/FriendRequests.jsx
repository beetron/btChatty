import { useEffect } from "react";
import FriendRequest from "./FriendRequest";
import useFriendStore from "../../store/friendStore";
import useGetFriendRequests from "../../hooks/useGetFriendRequests";

const FriendRequests = () => {
  const { render } = useFriendStore();
  const { loading, friendRequests, getFriendRequests } = useGetFriendRequests();

  useEffect(() => {
    getFriendRequests();
  }, [render]);

  return (
    <>
      <div className="flex flex-col justify-center items-start">
        <p className="dark:text-white text-2xl m-3">Incoming Friend Requests</p>
      </div>
      <div className="flex flex-col justify-start w-full ml-3">
        {loading ? (
          <p>Loading...</p>
        ) : !friendRequests.length ? (
          <p>No friend requests</p>
        ) : (
          friendRequests.map((friendRequest) => (
            <FriendRequest
              key={friendRequest._id}
              friendRequest={friendRequest}
            />
          ))
        )}
      </div>
    </>
  );
};

export default FriendRequests;
