import toast from "react-hot-toast";
import { useState } from "react";
import friendStore from "../store/friendStore";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedFriend } = friendStore();

  const sendMessage = async (message) => {
    setLoading(true);

    try {
      const res = await fetch(`/api/messages/send/${selectedFriend._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();

      // Check data for errors
      if (data.error) {
        throw new Error(data.error);
      }

      // Update messages store
      setMessages([...messages, data.message]);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading };
};

export default useSendMessage;
