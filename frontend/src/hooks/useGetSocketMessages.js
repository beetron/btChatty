import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import friendStore from "../store/friendStore";

const useGetSocketMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages, setRender } = friendStore();
  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      setMessages([...messages, newMessage]);
      // Update global state used to force useGetMessages() to re-run
      setRender();
    });
    return () => socket?.off("newMessage");
  }, [socket]);
};

export default useGetSocketMessages;
