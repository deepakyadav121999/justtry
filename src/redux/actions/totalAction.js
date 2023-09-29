import { ActionTypes } from "../constants/action-types";
export const setTotal =(total)=>({
       type: ActionTypes.SET_TOTAL,
       payload : total
})