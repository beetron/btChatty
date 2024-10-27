import { useAuthContext } from "../../context/AuthContext";
import friendStore from "../../store/friendStore";
import { dateTimeConverter } from "../../utils/dateTimeConverter";
import DOMPurify from "dompurify";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedFriend } = friendStore();

  // Identify the sender of the message
  const sender = authUser._id === message.senderId;
  const messageClassName = sender ? "chat-end" : "chat-start";
  // Set profilePhoto based on sender
  const profilePhoto = sender
    ? authUser.profilePhoto
    : selectedFriend.profilePhoto;

  // Set bg color based on sender
  const messageBgColor = sender ? "bg-blue-400" : "bg-gray-400";
  const formattedDateTime = dateTimeConverter(message.createdAt);

  // Sanitize the message content
  const sanitizedMessage = DOMPurify.sanitize(message.message);

  return (
    <div className={`chat ${messageClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePhoto} />
        </div>
      </div>
      <div
        className={`chat-bubble text-white ${messageBgColor}`}
        dangerouslySetInnerHTML={{ __html: sanitizedMessage }}
      />
      <div className="pb-1 chat-footer opacity-50">{formattedDateTime}</div>
    </div>
  );
};

export default Message;
