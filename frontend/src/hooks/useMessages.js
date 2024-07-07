import { create } from "zustand";

const useMessages = create((set) => ({
  selectedMessages: null,
  setSelectedMessages: (selectedMessages) => set({ selectedMessages }),
  message: [],
  setMessage: (message) => set({ message }),
}));

export default useMessages;
