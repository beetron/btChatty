import MenuContainer from "../menu/MenuContainer";
import AddFriend from "./AddFriend";
import FriendRequests from "./FriendRequests";

const FriendSettingsContainer = () => {
  return (
    <div className="w-full flex flex-col max-h-screen">
      <>
        <div className="fixed top-0 left-0 flex items-center bg-slate-500 w-full p-1">
          <MenuContainer isHomeScreen={false} />
        </div>
        <div className="flex flex-col mt-9 px-4 py-2 mb-2 w-full">
          <AddFriend />
          <div className="divider px-3" />
          <FriendRequests />
        </div>
      </>
    </div>
  );
};

export default FriendSettingsContainer;
