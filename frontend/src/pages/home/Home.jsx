import FriendsContainer from "../../components/friends/FriendsContainer";
import runOneSignal from "../../services/runOneSignal";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
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
