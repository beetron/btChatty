const FriendRequest = ({ friendRequest }) => {
  return (
    <>
      <div className="grid grid-cols-3 gap-3 items-center">
        <div className="flex justify-start gap-4 items-center m-2">
          <img src={friendRequest.profilePhoto} className="w-12 h-12" />
          <p className="font-bold text-gray-200">{friendRequest.nickname}</p>
        </div>
      </div>

      <div className="divider my-0 py-0 h-1" />
    </>
  );
};

export default FriendRequest;
