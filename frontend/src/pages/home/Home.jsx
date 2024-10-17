import FriendsContainer from "../../components/friends/FriendsContainer";
import runOneSignal from "../../services/runOneSignal";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    // Clear badge count when user opens the app while logged in
    // if (navigator.clearAppBadge) {
    //   navigator.clearAppBadge().catch((error) => {
    //     console.error("Failed to clear app badge:", error);
    //   });
    // }
    // Run OneSignal for notifications
    runOneSignal();
  }, []);
  return (
    <div className="flex max-w-[500px] rounded-lg w-full overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20">
      <div className="max-h-screen overflow-y-auto w-full">
        <FriendsContainer />
      </div>
    </div>
  );
};

export default Home;
