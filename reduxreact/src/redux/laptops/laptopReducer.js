import { BUY_LAPTOPS } from './laptopTypes';

const initialState = {
    numOfLaptops: 10
}

const LaptopReducer = (state=initialState, action) => {
    console.log("------------------",action.payload)
    switch(action.type){
        case BUY_LAPTOPS : return{
            ...state,
            numOfLaptops: state.numOfLaptops - parseInt(action.payload) 
        }
        default: return state
    }
}

export default LaptopReducer
