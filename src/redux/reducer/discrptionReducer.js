import { ActionTypes } from "../constants/action-types";
const initialState={
    discription:[]
}
export const discprtionReducer =(state=initialState,action)=>{
 const{type,payload} =action;
 switch(type){
        case ActionTypes.SET_DISCRIPTION:
            return{...state,discription:payload}
         default:
          return state

 }
}