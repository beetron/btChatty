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

      // Replace actual line breaks with <br /> if message.text exists
      const formattedData = {
        ...data,
        message:
          typeof data.message === "string"
            ? data.message.replace(/\n/g, "<br />")
            : data.message,
      };

      // Update messages store
      setMessages([...messages, formattedData]);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading };
};

export default useSendMessage;
