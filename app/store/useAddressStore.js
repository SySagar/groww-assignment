import create from 'zustand';

export const useAddressStore = create((set) => ({
  address : "",
  setAddress : (address) => set({ address }),
}));
