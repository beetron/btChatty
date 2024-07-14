import { create } from "zustand";

const useGetFriends = create((set) => ({
  selectedFriend: null,
  setSelectedFriend: (selectedFriend) =>
    set({ selectedFriend: selectedFriend }),
  message: [],
  setMessage: (message) => set({ message }),
}));

export default useGetFriends;
