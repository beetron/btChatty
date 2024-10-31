import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const submitMessage = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    // Clear message if sent successfully
    setMessage("");
  };

  const handleKeyDown = (e) => {
    // Check if client is on mobile device
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (e.key === "Enter") {
      if (isMobile) {
        // On mobile, insert a new line
        e.preventDefault();
        setMessage((prevMessage) => prevMessage + "\n");
      } else if (!isMobile && e.shiftKey) {
        // On desktop, Shift+Enter inserts a new line
        e.preventDefault();
        setMessage((prevMessage) => prevMessage + "\n");
      } else {
        // On desktop, Enter submits the message
        e.preventDefault();
        submitMessage(e);
      }
    }
  };

  return (
    <form className="px-4 my-3" onSubmit={submitMessage}>
      <div className="w-full relative">
        <textarea
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 
              bg-gray-700 border-gray-600 text-white"
          placeholder="Start typing"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          {loading ? (
            <div className="loading loading-spinner"></div>
          ) : (
            <BsSend />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
