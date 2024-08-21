import React from "react";
import MessageContainer from "../../components/messages/MessageContainer";

const Messages = () => {
  return (
    <div className="flex rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20">
      <MessageContainer />
    </div>
  );
};

export default Messages;
