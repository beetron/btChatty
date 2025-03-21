import { useEffect } from "react";
import UpdateInfo from "./UpdateInfo";
import FriendList from "./FriendList";
import MenuContainer from "../menu/MenuContainer";
import friendStore from "../../store/friendStore";

const FriendsContainer = () => {
  const { setSelectedFriend } = friendStore();

  useEffect(() => {
    setSelectedFriend(null);
  }, []);

  return (
    <div className="max-w-[500px] flex flex-col items-center">
      <div className="fixed top-0 left-0 flex items-center bg-slate-500 w-full p-1">
        <MenuContainer isHomeScreen={true} />
      </div>
      <div className="divider px-3" />
      <UpdateInfo />
      <div className="divider px-3" />
      <FriendList />
    </div>
  );
};

export default FriendsContainer;
