import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer"
import categoryListReducer from "./categoryListReducer"
import productListReducer from "./productListReducer";

const rootReducer = combineReducers({
    // kök reducera combineReducers fonku içerisinde bir obje ile elimizdeki reducerlerı geçiyoruz.
    changeCategoryReducer,
    categoryListReducer,
    productListReducer
})

export default rootReducer;