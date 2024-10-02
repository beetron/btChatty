import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import friendStore from "../store/friendStore";

const useGetSocketDetectMessages = () => {
  const { socket } = useSocketContext();
  const { setRecentMessages } = friendStore();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      setRecentMessages();
    });
    return () => socket?.off("newMessage");
  }, [socket]);
};

export default useGetSocketDetectMessages;
