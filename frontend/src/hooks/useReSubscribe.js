const useReSubscribe = () => {
  const reSubscribe = () => {
    // Remove OneSignal notification promp status to request
    localStorage.removeItem("onesignal-notification-prompt");

    // Remove OneSignal initialization status to reinitialize
    localStorage.removeItem("btchatty-OneSignal-initialized");

    // Reload page to trigger OneSignal prompt
    window.location.reload();
  };
  return reSubscribe;
};

export default useReSubscribe;
