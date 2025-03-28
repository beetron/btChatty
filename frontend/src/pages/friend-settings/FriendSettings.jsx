import FriendSettingsContainer from "../../components/friend-settings/FriendSettingsContainer";

const FriendSettings = () => {
  return (
    <div className="flex max-w-[500px] rounded-lg w-full overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20">
      <div className="max-h-screen overflow-y-auto w-full">
        <FriendSettingsContainer />
      </div>
    </div>
  );
};

export default FriendSettings;
