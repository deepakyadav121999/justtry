import { ActionTypes } from "../constants/action-types";
export const setProduct =(products)=>(
    {type :ActionTypes.SET_PRODUCTS,
    payload:products}
)