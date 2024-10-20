import runOneSignal from "../services/runOneSignal";

const useReSubscribe = () => {
  const reSubscribe = () => {
    // Remove OneSignal notification promp status to request
    localStorage.removeItem("onesignal-notification-prompt");

    // Re-initialize OneSignal
    runOneSignal();
  };
  return reSubscribe;
};

export default useReSubscribe;
