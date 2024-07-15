import React from "react";
import friendStore from "../../store/friendStore";

const Friend = ({ friend }) => {
  const { selectedFriend, setSelectedFriend } = friendStore();

  // Handle selected state
  const handleSelected = () => {
    setSelectedFriend(friend._id);
  };

  // Double check selected friend
  const isSelected = selectedFriend === friend._id;

  return (
    <>
      <div
        className={`flex gap-2 items-center rounded p-2 py-1 cursor-pointer ${
          isSelected ? "bg-sky-500" : "hover:bg-sky-500"
        }`}
        onClick={handleSelected}
      >
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
