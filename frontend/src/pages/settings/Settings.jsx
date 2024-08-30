import SettingsContainer from "../../components/settings/SettingsContainer";

const Settings = () => {
  return (
    <div className="flex max-w-[500px] rounded-lg w-full overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20">
      <div className="max-h-screen overflow-y-auto w-full">
        <SettingsContainer />
      </div>
    </div>
  );
};

export default Settings;
