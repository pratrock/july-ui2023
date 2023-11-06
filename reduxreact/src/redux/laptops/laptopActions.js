import { BUY_LAPTOPS } from './laptopTypes';
export const buyLaptop = (number) => {
    console.log("-----------------------------++++++++++",number)
    return {
       type:BUY_LAPTOPS,
       payload:number
    }
}
