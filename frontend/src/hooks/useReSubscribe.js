const useReSubscribe = () => {
  // Remove OneSignal notification promp status to request
  localStorage.removeItem("onesignal-notification-prompt");

  // reload page to force OneSignal to prompt again
  window.location.reload();
};

export default useReSubscribe;
