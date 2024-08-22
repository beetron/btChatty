import Messages from "./Messages";
import MessageInput from "./MessageInput";
import friendStore from "../../store/friendStore";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
  const { selectedFriend, setSelectedFriend } = friendStore();

  return (
    <div className="w-[450px] flex flex-col max-h-screen">
      {!selectedFriend ? (
        <NoFriendSelected />
      ) : (
        <>
          <div className="bg-slate-500 px-4 py-2 mb-2 flex-shrink-0">
            <span className="label-text">To:</span>{" "}
            <span className="text-gray-900 font-bold">
              {selectedFriend.nickname}
            </span>
          </div>
          <div className="flex-1 overflow-y-auto">
            <Messages />
          </div>
          <div className="flex-shrink-0">
            <MessageInput />
          </div>
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoFriendSelected = () => {
  const { authUser } = useAuthContext();

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div
        className="px-4 text-center sm:text-lg md:text-xl 
      text-gray-200 font-semibold flex flex-col items-center gap-2"
      >
        <p>{`Hi, ${authUser.nickname}. `}</p>
        <p>Welcome message or hint/tips</p>
        <p>How to use app here</p>
      </div>
    </div>
  );
};
