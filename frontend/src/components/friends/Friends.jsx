import React from "react";
import SearchInput from "./SearchInput";
import FriendList from "./FriendList";
import MenuContainer from "../menu/MenuContainer";

const Friends = () => {
  return (
    <div className="max-w-[500px] flex flex-col items-center">
      <div className="fixed top-0 left-0 flex items-center bg-slate-500 w-full p-1">
        <MenuContainer isHomeScreen={true} />
      </div>
      <div className="divider px-3" />
      <SearchInput />
      <div className="divider px-3" />
      <FriendList />
    </div>
  );
};

export default Friends;
