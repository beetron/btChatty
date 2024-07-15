import { create } from "zustand";

const friendStore = create((set) => ({
  selectedFriend: null,
  setSelectedFriend: (selectedFriend) => set({ selectedFriend }),
  messages: [],
  setMessages: (messages) => set({ messages }),
}));

export default friendStore;
