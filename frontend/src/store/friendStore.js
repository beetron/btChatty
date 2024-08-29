import { create } from "zustand";

const useFriendStore = create((set) => ({
  selectedFriend: JSON.parse(localStorage.getItem("selectedFriend")) || null,
  setSelectedFriend: (friend) => {
    if (friend === null) {
      localStorage.removeItem("selectedFriend");
    } else {
      localStorage.setItem("selectedFriend", JSON.stringify(friend));
      set({ selectedFriend: friend });
    }
  },
  messages: [],
  setMessages: (messages) => set({ messages }),
}));

export default useFriendStore;
