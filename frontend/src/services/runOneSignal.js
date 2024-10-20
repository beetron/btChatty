import OneSignal from "react-onesignal";

export default async function runOneSignal() {
  // Retrieve user _id for OneSignal's external_id linking
  const authUser = JSON.parse(localStorage.getItem("btchatty-user"));

  // Initialize OneSignal
  await OneSignal.init({
    appId: import.meta.env.VITE_ONESIGNAL_APP_ID,
    allowLocalhostAsSecureOrigin: true,
  });

  // Register or login with external_id (_id used)
  OneSignal.login(authUser._id);

  console.log("OneSignal initialized");
}
