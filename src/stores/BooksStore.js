import { create } from "zustand";

const useBooksStore = create((set) => ({
  books: [
    {
      name: "John",
      surname: "Doe",
      phoneNumber: "01231231212",
    },
  ],
  addBook: (item) =>
    set((state) => ({
      books: [...state.books, item],
    })),
  removeBook: (phoneNumber) =>
    set((state) => ({
      books: state.books.filter((item) => phoneNumber !== item.phoneNumber),
    })),
}));

export default useBooksStore;
