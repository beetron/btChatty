import toast from "react-hot-toast";
import OneSignal from "react-onesignal";

const useReSubscribe = () => {
  const handleReSubscribe = async () => {
    OneSignal.push(async () => {
      try {
        const isSubscribed = await OneSignal.isPushNotificationsEnabled();
        console.log(isSubscribed);

        if (!isSubscribed) {
          OneSignal.showNativePrompt();
        } else {
          toast.error("You're already subscribed");
        }
      } catch (error) {
        console.error("Error checking subscription status:", error);
        toast.error("Failed to check subscription status");
      }
    });
  };
  return { handleReSubscribe };
};

export default useReSubscribe;
