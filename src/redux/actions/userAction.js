import { ActionTypes } from "../constants/action-types";
export const setuser =(user)=>({
 type: ActionTypes.SET_USER,
 payload: user
})