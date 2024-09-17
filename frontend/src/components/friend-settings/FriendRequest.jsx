import AcceptButton from "./AcceptButton.jsx";
import RejectButton from "./RejectButton.jsx";

const FriendRequest = ({ friendRequest, onUpdate }) => {
  return (
    <>
      <div className="grid grid-cols-3 gap-3 items-center">
        <div className="flex justify-start gap-4 items-center m-2">
          <img src={friendRequest.profilePhoto} className="w-12 h-12" />
          <p className="font-bold text-gray-200">{friendRequest.nickname}</p>
        </div>
        <div className="flex gap-3 items-center">
          <AcceptButton friendRequest={friendRequest} onUpdate={onUpdate} />
          <RejectButton friendRequest={friendRequest} />
        </div>
      </div>

      <div className="divider my-0 py-0 h-1" />
    </>
  );
};

export default FriendRequest;
