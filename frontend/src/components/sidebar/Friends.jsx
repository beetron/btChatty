import React from "react";
import SearchInput from "./SearchInput";
import FriendList from "./FriendList";
import LogoutButton from "./LogoutButton";
import SettingsButton from "./SettingsButton";

const Friends = () => {
  return (
    <div className="w-full max-w-none flex flex-col items-center">
      <div className="fixed top-0 left-0 flex gap-4 items-center bg-slate-500 w-full p-1">
        <SettingsButton />
        <LogoutButton />
      </div>
      <div className="divider px-3"></div>
      <SearchInput />
      <div className="divider px-3"></div>
      <FriendList />
    </div>
  );
};

export default Friends;
