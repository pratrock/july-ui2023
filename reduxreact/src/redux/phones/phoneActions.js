import { BUY_PHONES } from './phoneTypes';
export const buyPhones = () => {
    console.log("Action")
    return {
       type:BUY_PHONES
    }
}
