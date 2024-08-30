import React from "react";
import MessagesContainer from "../../components/messages/MessagesContainer";

const Messages = () => {
  return (
    <div className="flex max-w-[500px] rounded-lg w-full overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20">
      <div className="max-h-screen overflow-y-auto w-full">
        <MessagesContainer />
      </div>
    </div>
  );
};

export default Messages;
