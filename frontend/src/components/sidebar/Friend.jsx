import React from "react";
import friendStore from "../../store/friendStore";

const Friend = ({ friend, onSelect }) => {
  const { selectedFriend, setSelectedFriend } = friendStore();

  return (
    <>
      <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
        <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
          <img src={friend.profilePhoto} className="w-full h-full" />
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{friend.nickname}</p>
            <span className="text-xl">🍕</span>
          </div>
        </div>
      </div>

      <div className="divider my-0 py-0 h-1" />
    </>
  );
};

export default Friend;
