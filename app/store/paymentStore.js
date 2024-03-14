import create from 'zustand';

export const usePaymentStore = create((set) => ({
  paymentData : {
    paymentMethod : "",
    transactionId : "",
    status : "",
    amount : 0,
  },
    setPaymentData : (paymentData) => set({paymentData}),
}));
