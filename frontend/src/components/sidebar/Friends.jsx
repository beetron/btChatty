import React from "react";
import SearchInput from "./SearchInput";
import FriendList from "./FriendList";
import LogoutButton from "./LogoutButton";

const Friends = () => {
  return (
    <div className="w-full max-w-none flex flex-col items-start mt-4">
      <LogoutButton />
      <div className="divider px-3"></div>
      <SearchInput />
      <div className="divider px-3"></div>
      <FriendList />
    </div>
  );
};

export default Friends;
