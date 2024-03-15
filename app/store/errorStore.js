import create from "zustand";

export const useErrorStore = create((set) => ({
  error: {
    message: "",
    code: 0,
    status: false,
  },
  setError: (error) => set({ error: error }),
}));
