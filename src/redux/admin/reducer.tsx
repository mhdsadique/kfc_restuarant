import { Product, ProductAction, ProductState } from "@/utills/types";
import { ADMIN_ERROR, ADMIN_GET, ADMIN_LOADING,  } from "./type";

const initialState:ProductState={
    loading:false,
    error:false,
    data:[]
}
const adminReducer=(state:ProductState=initialState,{type,payload}:ProductAction):ProductState=>{
    switch(type){
        case ADMIN_LOADING:{
            return{
                ...state,
                loading:true
            }; }
              case ADMIN_GET:{
                return{
                    ...state,
                    loading:false,
                    error:false,
                    data:payload
                }   }
        case ADMIN_ERROR:{
            return{
                ...state,
                loading:false,
                error:true
            } }
        default:{
        return state
        }}}
export default adminReducer