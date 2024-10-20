import OneSignal from "react-onesignal";

export default async function runOneSignal() {
  // Check if OneSignal is already initialized
  const isInitialized = JSON.parse(
    localStorage.getItem("btchatty-OneSignal-initialized")
  );
  if (isInitialized) {
    console.log("OneSignal is already initialized");
    return;
  }
  // Retrieve user _id for OneSignal's external_id linking
  const authUser = JSON.parse(localStorage.getItem("btchatty-user"));

  // Initialize OneSignal
  await OneSignal.init({
    appId: import.meta.env.VITE_ONESIGNAL_APP_ID,
    allowLocalhostAsSecureOrigin: true,
  });

  // Register or login with external_id (_id used)
  OneSignal.login(authUser._id);

  // Set OneSignal-Initialized to true in localStorage
  localStorage.setItem("btchatty-OneSignal-initialized", JSON.stringify(true));

  console.log("OneSignal initialized");
}
