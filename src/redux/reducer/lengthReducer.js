import { ActionTypes } from "../constants/action-types";
const initialState ={
    length:0
}
export const lengthReducer =(state =initialState,action)=>{
              const {type ,payload} = action
              switch(type){
                case ActionTypes.SET_LENGTH:
                    return {...state, length:payload}
                    default :
                    return state
              }
}