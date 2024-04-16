import { create } from "zustand";

const useBooksStore = create((set) => ({
  books: [],
  addBook: (item) => set((state) => [...state.books, item]),
  removeBook: (phoneNumber) =>
    set((state) =>
      state.books.fiter((item) => phoneNumber !== item.phoneNumber)
    ),
}));

export default useBooksStore;
