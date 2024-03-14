import { v4 as uuidv4 } from 'uuid';

export const generateTransactionId = () => {
    const id =  uuidv4();
    return id.split('-').join('');
    }