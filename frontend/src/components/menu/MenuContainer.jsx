import HomeButton from "./HomeButton";
import SettingsButton from "./SettingsButton";
import LogoutButton from "./LogoutButton";

const MenuContainer = ({ isHomeScreen }) => {
  return (
    <div className="fixed top-0 left-0 flex items-center bg-slate-500 w-full p-1">
      <div className="flex justify-start w-full gap-4 ml-2">
        {!isHomeScreen && <HomeButton />}
      </div>
      <div className="flex justify-end w-full gap-4 mr-2">
        <SettingsButton />
        <LogoutButton />
      </div>
    </div>
  );
};

export default MenuContainer;
