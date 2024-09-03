import { FaUserFriends } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const FriendSettingsButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/friendsettings");
  };

  return (
    <div className="mt-auto">
      <FaUserFriends
        className="w-8 h-8 text-white cursor-pointer"
        onClick={handleClick}
      />
    </div>
  );
};

export default FriendSettingsButton;
