import create from "zustand";

const initialState = {
  merchantName: "",
  merchantLogo: "",
};

export const useMerchantStore = create((set) => ({
  ...initialState,
  setMerchant: (data) =>
    set((state) => ({
      merchantName: data.merchantName,
      merchantLogo: data.merchantLogo,
    })),
}));
