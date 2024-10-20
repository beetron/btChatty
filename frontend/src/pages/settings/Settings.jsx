import { useEffect } from "react";
import SettingsContainer from "../../components/settings/SettingsContainer";
import runOneSignal from "../../services/runOneSignal";

const Settings = () => {
  useEffect(() => {
    // Temporary workaround to run OneSignal after reloading the page to resubscribe
    runOneSignal();
  }, []);

  return (
    <div className="flex max-w-[500px] rounded-lg w-full overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20">
      <div className="max-h-screen overflow-y-auto w-full">
        <SettingsContainer />
      </div>
    </div>
  );
};

export default Settings;
