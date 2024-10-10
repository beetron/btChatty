import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import friendStore from "../store/friendStore";

const useGetSocketDetectMessages = () => {
  const { socket } = useSocketContext();
  const { recentMessages, setRecentMessages } = friendStore();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      setRecentMessages(!recentMessages);
    });
    return () => socket?.off("newMessage");
  }, [socket]);
};

export default useGetSocketDetectMessages;
