import FriendRequest from "./FriendRequest";

const FriendRequests = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-start">
        <p className="dark:text-white text-2xl m-3">Incoming Friend Requests</p>
      </div>
      <div className="flex justify-start w-full">
        <FriendRequest />
      </div>
    </>
  );
};

export default FriendRequests;
