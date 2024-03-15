import { PaymentStatus } from "@lib/status";

export const getRandomStatus = () => {
  const statuses = Object.values(PaymentStatus);
  const randomIndex = Math.floor(Math.random() * statuses.length);
  return statuses[randomIndex];
};
