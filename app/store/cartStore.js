import create from 'zustand';

export const useCartStore = create((set) => ({
  products : [],
  paymentMethods : ['UPI', 'CARDS'],
  setProducts : (products) => set({ products }),
}));
