import { useEffect, useRef, useState } from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import useGetSocketMessages from "../../hooks/useGetSocketMessages";

const Messages = () => {
  const { loading, messages } = useGetMessages();
  const lastMessageRef = useRef();
  useGetSocketMessages();
  const [renderMessage, setRenderMessages] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     lastMessageRef.current?.scrollIntoView({ behavior: "auto" });
  //   }, 100);
  // }, [messages]);

  useEffect(() => {
    if (!loading && messages.length > 0) {
      // Wait for the next event loop tick to ensure the messages are in the DOM
      lastMessageRef.current?.scrollIntoView({ behavior: "auto" });
      // After scrolling, allow messages to be rendered
      setRenderMessages(true);
    } else {
      setRenderMessages(false);
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
