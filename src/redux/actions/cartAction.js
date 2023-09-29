import { ActionTypes } from "../constants/action-types";
export const SetCart =(products)=>({
       type: ActionTypes.SET_CART,
       payload:products
})