import { ActionTypes } from "../constants/action-types";
export const setSearch =(products)=>(
    {
   type:ActionTypes.SET_SEARCH,
   payload:products
    }
)