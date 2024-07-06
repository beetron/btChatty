import React from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";

const MessageContainer = () => {
  const noFriendSelected = true;

  return (
    <div className="md:min-w-[450px] flex flex-col">
      {noFriendSelected ? (
        <NoFriendSelected />
      ) : (
        <>
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text">To:</span>{" "}
            <span className="text-gray-900 font-bold">Mr. Random</span>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoFriendSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div
        className="px-4 text-center sm:text-lg md:text-xl 
      text-gray-200 font-semibold flex flex-col items-center gap-2"
      >
        <p>Welcome message or hint/tips</p>
        <p>How to use app here</p>
      </div>
    </div>
  );
};

// const MessageContainer = () => {
//   return (
//     <div className="md:min-w-[450px] flex flex-col">
//       <>
//         <div className="bg-slate-500 px-4 py-2 mb-2">
//           <span className="label-text">To:</span>{" "}
//           <span className="text-gray-900 font-bold">Mr. Random</span>
//         </div>

//         <Messages />
//         <MessageInput />
//       </>
//     </div>
//   );
// };

// export default MessageContainer;