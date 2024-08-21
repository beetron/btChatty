import { createContext, useContext, useState, useEffect } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuthContext();

  const socketURL =
    import.meta.env.VITE_NODE_ENV === "production"
      ? import.meta.env.VITE_PRODUCTION_URL
      : import.meta.env.VITE_DEVELOPMENT_URL;

  useEffect(() => {
    if (authUser) {
      const socket = io(socketURL, {
        query: {
          userId: authUser._id, // Set userId parameter on connect
        },
      });

      setSocket(socket);

      socket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });

      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
