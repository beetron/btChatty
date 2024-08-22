import React from "react";
import friendStore from "../../store/friendStore";

const Friend = ({ friend }) => {
  const { selectedFriend, setSelectedFriend } = friendStore();

  // Double check selected friend
  const isSelected = selectedFriend?._id === friend._id;

  return (
    <>
      <div
        className={`flex gap-2 items-center rounded p-2 py-1 cursor-pointer hover:bg-gray-600 ${
          isSelected ? "bg-sky-500" : ""
        }`}
        onClick={() => setSelectedFriend(friend)}
      >
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-center items-center">
            <img src={friend.profilePhoto} className="w-12 h-12" />
            <p className="font-bold text-gray-200">{friend.nickname}</p>
            <span className="text-xl ">🍕</span>
          </div>
        </div>
      </div>

      <div className="divider my-0 py-0 h-1" />
    </>
  );
};

export default Friend;
