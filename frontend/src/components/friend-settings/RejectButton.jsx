import { LiaHandMiddleFingerSolid } from "react-icons/lia";
import useRejectFriendRequest from "../../hooks/useRejectFriendRequest";
import useFriendStore from "../../store/friendStore";

const RejectButton = ({ friendRequest }) => {
  const { loading, rejectFriendRequest } = useRejectFriendRequest();
  const { setRender } = useFriendStore();

  const handleClick = async () => {
    await rejectFriendRequest(friendRequest.uniqueId);
    // Zustand store re-render trigger for FriendRequests component
    setRender();
  };

  return (
    <button
      className="btn bg-red-500 hover:bg-blue-400 text-white"
      onClick={handleClick}
      disabled={loading}
    >
      <LiaHandMiddleFingerSolid size={24} />
    </button>
  );
};

export default RejectButton;
