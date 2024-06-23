import { create } from "zustand";

type User = {
  uid: string;
  email: string;
  username: string;
  fullname: string;
  posts: string[]; // Post ID
  follower: string[]; // User ID
  following: string[]; // User ID
  bio: string;
  createdAt: string;
};

const useAuthStore = create((set) => ({
  user: JSON.parse(localStorage.getItem("user-info")!),
  login: (user: User) => set({ user }),
  logout: () => set({ user: null }),
  setUser: (user: User) => set({ user }),
}));

export default useAuthStore;
