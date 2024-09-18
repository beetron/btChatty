import { LiaThumbsUp } from "react-icons/lia";
import useAcceptFriendRequest from "../../hooks/useAcceptFriendRequest";
import useFriendStore from "../../store/friendStore";

const AcceptButton = ({ friendRequest, onUpdate }) => {
  const { loading, acceptFriendRequest } = useAcceptFriendRequest();
  const { render, setRender } = useFriendStore();

  const handleClick = async () => {
    await acceptFriendRequest(friendRequest.uniqueId);
    // Zustand store re-render trigger for FriendRequests component
    setRender();
  };

  return (
    <button
      className="btn bg-blue-500 hover:bg-blue-400 text-white"
      onClick={handleClick}
      disabled={loading}
    >
      <LiaThumbsUp size={24} />
    </button>
  );
};

export default AcceptButton;
