import { useState, useEffect } from "react";
import friendStore from "../store/friendStore";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedFriend, render } = friendStore();

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
        // Replace actual line breaks with <br /> if message.text exists
        const formattedData = data.map((messages) => ({
          ...messages,
          message: messages.message
            ? messages.message.replace(/\n/g, "<br />")
            : messages.message,
        }));

        // Update and set messages
        setMessages(formattedData);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    getMessages();
  }, [setMessages, render]);

  return { loading, messages };
};

export default useGetMessages;
