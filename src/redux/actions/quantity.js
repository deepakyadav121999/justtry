import { ActionTypes } from "../constants/action-types";
export const setQuantity =(products)=>(
    {
   type:ActionTypes.SET_QUANTITY,
   payload:products
    }
)