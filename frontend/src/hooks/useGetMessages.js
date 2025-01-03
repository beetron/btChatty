import { useState, useEffect } from "react";
import friendStore from "../store/friendStore";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedFriend, render } = friendStore();
  const [isVisible, setIsVisible] = useState(
    document.visibilityState === "visible"
  );

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(document.visibilityState === "visible");
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

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
        const formattedData = data.map((message) => ({
          ...message,
          message: message.message
            ? message.message.replace(/\n/g, "<br />")
            : message.message,
        }));

        // Update and set messages
        setMessages(formattedData);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (isVisible) {
      getMessages();
    }
  }, [setMessages, render, isVisible, selectedFriend._id]);

  return { loading, messages };
};

export default useGetMessages;
