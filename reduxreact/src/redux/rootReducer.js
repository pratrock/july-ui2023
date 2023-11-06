import { combineReducers } from "redux";
import PhoneReducer from "./phones/phoneReducer";
import LaptopReducer from "./laptops/laptopReducer";
import userReducer from './user/userReducer';

const rootReducer = combineReducers({
    laptop:LaptopReducer,
    phone:PhoneReducer,
    user:userReducer
})

export default rootReducer;