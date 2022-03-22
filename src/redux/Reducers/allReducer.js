import { combineReducers } from "redux";
import authReducer from "./authReducer";
import productReducer from "./productReducer";

const allReducer = combineReducers({
    auth: authReducer,
    product: productReducer
})

export default allReducer