import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import friendStore from "../store/friendStore";

const useGetSocketMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = friendStore();
  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      setMessages([...messages, newMessage]);
    });
    return () => socket?.off("newMessage");
  }, [socket, setMessages, messages]);
};

export default useGetSocketMessages;
