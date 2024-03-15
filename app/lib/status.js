export const PaymentStatus = Object.freeze({ 
    Success: {
      status: "success",
      message: "Yay! Your payment is successful, your order will be delivered soon",
    },
    Failure: {
      status: "failure",
      message: "Oh no! Your payment is failed, we will refund your money soon",
    },
    Pending: {
      status: "pending",
      message: "Your payment is pending, please wait for a while",
    },
  });