import { ActionTypes } from "../constants/action-types";
const initialState = {
    cartdata :[]
}
export const cartReducer =(state = initialState,action)=>{
 const {type,payload} = action;
 switch(type){
    case ActionTypes.SET_CART:
        return {...state,cartdata:payload}
        default :
        return state;
 }
}