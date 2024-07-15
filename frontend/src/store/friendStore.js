import { create } from "zustand";

const friendStore = create((set) => ({
  selectedFriend: null,
  setSelectedFriend: (selectedFriend) => set({ selectedFriend }),
  messages: [],
  // selectedFriend: (friend) => set({ selectedFriend: friend }),
  setMessages: (messages) => set({ messages }),
}));

export default friendStore;
