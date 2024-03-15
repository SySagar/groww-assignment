import create from "zustand";

export const usePaymentStore = create((set) => ({
  paymentData: {
    paymentMethod: "",
    transactionId: "",
    status: "",
    statusMessage: "",
    amount: 0,
    transactionTime: "",
  },
  setPaymentData: (paymentData) => set({ paymentData }),
}));
