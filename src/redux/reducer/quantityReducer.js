import { ActionTypes } from "../constants/action-types";
const initialState = {
  quantity:1
}
export const quantityReducer=(state = initialState,action)=>{
    const {type,payload}= action;
    switch(type){
 case ActionTypes.SET_QUANTITY:
    return {...state ,quantity:payload}
    default:
        return state;
    }
   
        
}