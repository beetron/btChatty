import { useState, useEffect } from "react";
import friendStore from "../store/friendStore";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages, selectedFriend] = friendStore();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);

      try {
        const res = await fetch(`/api/messages/get/${selectedFriend._id}`);
        const data = await res.json();

        // Check data for errors
        if (data.error) {
          throw new Error(data.error);
        }

        // Update messages store
        setMessages(data);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
      if (selectedFriend?._id) getMessages();
    };
  }, [selectedFriend?._id, setMessages]);
  return { loading, messages };
};

export default useGetMessages;
