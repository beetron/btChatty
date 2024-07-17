import { useAuthContext } from "../../context/AuthContext";
import friendStore from "../../store/friendStore";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedFriend } = friendStore();

  // Identify the sender of the message
  const sender = authUser._id === message.senderId;
  const messageClassName = sender ? "chat-end" : "chat-start";
  const profilePhoto = sender
    ? authUser.profilePhoto
    : selectedFriend.profilePhoto;
  const messageBgColor = sender ? "bg-blue-400" : "bg-gray-400";

  return (
    <div className={`chat ${messageClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePhoto} />
        </div>
      </div>
      <div className={`chat-bubble text-white ${messageBgColor}`}>
        {message.message}
      </div>
      <div className="chat-footer opacity-50">{message.createdAt}</div>
    </div>
  );
};

export default Message;
