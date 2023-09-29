import { ActionTypes } from "../constants/action-types";
const initialState = {
    search:[]
}
export const searchReducer=(state = initialState,action)=>{
    const {type,payload}= action;
    switch(type){
 case ActionTypes.SET_SEARCH:
    return {...state ,search:payload}
    default:
        return state;
    }
   
        
}