import React from "react";
import SearchInput from "./SearchInput";
import FriendList from "./FriendList";
import LogoutButton from "./LogoutButton";

const Friends = () => {
  return (
    <div className="border-r border-slate-500 p-4 w-64 flex flex-col">
      <SearchInput />
      <div className="divider px-3"></div>
      <FriendList />
      <LogoutButton />
    </div>
  );
};

export default Friends;