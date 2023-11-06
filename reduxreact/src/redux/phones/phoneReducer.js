import { BUY_PHONES } from './phoneTypes';

const initialPhoneState = {
    numOfPhones: 20
}

const PhoneReducer = (state=initialPhoneState, action) => {
    console.log("Inside Phones")
    switch(action.type){
        case BUY_PHONES : return{
            ...state,
            numOfPhones: state.numOfPhones - 1 
        }
        default: return state
    }
}

export default PhoneReducer
