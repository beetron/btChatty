import MenuContainer from "../menu/MenuContainer";
import UpdateUniqueId from "./UpdateUniqueId";
import UpdateNickname from "./UpdateNickname";
import ReSubscribe from "./ReSubscribe";

const SettingsContainer = () => {
  return (
    <div className="w-full flex flex-col max-h-screen">
      <>
        <div className="fixed top-0 left-0 flex items-center bg-slate-500 w-full p-1">
          <MenuContainer isHomeScreen={false} />
        </div>
        <div className="flex flex-col mt-9 px-4 py-2 mb-2 w-full">
          <UpdateNickname />
          <div className="divider px-3" />
          <UpdateUniqueId />
          <div className="divider px-3" />
          <ReSubscribe />
        </div>
      </>
    </div>
  );
};

export default SettingsContainer;
