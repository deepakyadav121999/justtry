import { ActionTypes } from "../constants/action-types";
export const setLength =(length)=>({
      type:ActionTypes.SET_LENGTH,
      payload:length
})