import { ActionTypes } from "../constants/action-types";
const initialState ={
    total :0
}
export const totalReducer=(state =initialState,action)=>{
   const {type ,payload}= action;
    switch(type){
        case ActionTypes.SET_TOTAL:
            return {...state,total:payload}
            default:
            return state
    }
}