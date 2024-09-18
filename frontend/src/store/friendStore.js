import { create } from "zustand";

const useFriendStore = create((set) => ({
  // Store selected friend
  selectedFriend: JSON.parse(localStorage.getItem("selectedFriend")) || null,
  setSelectedFriend: (friend) => {
    if (friend === null) {
      localStorage.removeItem("selectedFriend");
    } else {
      localStorage.setItem("selectedFriend", JSON.stringify(friend));
      set({ selectedFriend: friend });
    }
  },
  // Store messages
  messages: [],
  setMessages: (messages) => set({ messages }),
  // Used to triggger re-renders
  render: false,
  setRender: () => set((state) => ({ render: !state.render })),
}));

export default useFriendStore;
