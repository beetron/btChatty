import { useNavigate } from "react-router-dom";
import friendStore from "../../store/friendStore";

const Friend = ({ friend }) => {
  const { setSelectedFriend } = friendStore();

  const navigate = useNavigate();

  const handleClick = () => {
    setSelectedFriend(friend);
    navigate("/messages");
  };

  return (
    <>
      <div
        className="flex gap-2 items-center rounded p-2 py-1 cursor-pointer hover:bg-gray-600"
        onClick={handleClick}
      >
        <div className="flex flex-col flex-1">
          <div className="grid grid-cols-3 gap-3 items-center">
            <div className="flex justify-end">
              <img src={friend.profilePhoto} className="w-12 h-12" />
            </div>
            <p className="font-bold text-gray-200">{friend.nickname}</p>
            <div className="flex justify-start">
              {friend.unreadMessages && <span className="text-xl">❕</span>}
            </div>
          </div>
        </div>
      </div>

      <div className="divider my-0 py-0 h-1" />
    </>
  );
};

export default Friend;
