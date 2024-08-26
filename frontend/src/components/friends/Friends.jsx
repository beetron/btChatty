import React from "react";
import SearchInput from "./SearchInput";
import FriendList from "./FriendList";
import LogoutButton from "../menu/LogoutButton";
import SettingsButton from "../menu/SettingsButton";

const Friends = () => {
  return (
    <div className="w-full max-w-none flex flex-col items-center">
      <div className="fixed top-0 left-0 flex items-center bg-slate-500 w-full p-1">
        <div className="flex justify-end w-full gap-4">
          <SettingsButton />
          <LogoutButton />
        </div>
      </div>
      <div className="divider px-3" />
      <SearchInput />
      <div className="divider px-3" />
      <FriendList />
    </div>
  );
};

export default Friends;
