import { ActionTypes } from "../constants/action-types";
const initialState ={
    user:false
}
export const userReducer =(state = initialState ,action)=>{
    const{type,payload} = action
    switch(type){
        case ActionTypes.SET_USER:
            return{...state ,user:payload}
            default:
                return state;
    }
}