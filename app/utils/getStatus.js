import {PaymentStatus} from "@lib/status";

export const getRandomStatus = () => {
    console.log('status',PaymentStatus);
    const statuses = Object.values(PaymentStatus);
    const randomIndex = Math.floor(Math.random() * statuses.length);
    return statuses[randomIndex];
};
