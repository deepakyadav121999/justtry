import { ActionTypes } from "../constants/action-types";
const initialState ={
    listproducts:[]
}
export const productReducer =(state=initialState,action)=>{
      const{type,payload} = action;
      switch(type){
        case ActionTypes.SET_PRODUCTS:
            return {...state,listproducts:payload}
            default:
                return state;
      }
}