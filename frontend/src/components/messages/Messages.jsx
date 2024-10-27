import { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import useGetSocketMessages from "../../hooks/useGetSocketMessages";
import friendStore from "../../store/friendStore";

const Messages = () => {
  // Render dependency used for useGetMessages() hook
  const { render } = friendStore();
  const { loading, messages } = useGetMessages();
  const lastMessageRef = useRef();
  useGetSocketMessages();

  useEffect(() => {
    if (!loading && messages.length > 0) {
      // Wait for the next event loop tick to ensure the messages are in the DOM
      lastMessageRef.current?.scrollIntoView({ behavior: "auto" });
    }
  }, [loading, messages]);

  return (
    <div className="px-4 flex-1 overflow-auto scrollbar-primary">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}

      {loading && <p className="text-gray-200">Loading...</p>}
      {!loading && messages.length === 0 && (
        <p className="text-center">Send your first message.</p>
      )}
    </div>
  );
};

export default Messages;
