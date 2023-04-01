
import { useEffect } from "react";
import { CartAction, CartState, Product } from "@/utills/types";
import { CART_ADD, CART_DELETE, CART_ERROR, CART_GET, CART_LOADING, CART_SUCCESS, CART_UPDATE } from "./type";
// let token =window.localStorage.getItem("token")
const initialState:CartState={
    token:"",
    loading:false,
    error:false,
    data:[]
}

const cartReducer=(state:CartState=initialState,{type,payload}:CartAction):CartState=>{
    switch(type){
        case CART_LOADING:{
            return{
                ...state,
                loading:true
            };  }
              case CART_ADD:{
                return{
                    ...state,
                    loading:false,
                    error:false,
                }  }
                case CART_GET:{
                    return{
                        ...state,
                        loading:false,
                        error:false,
                        data:payload,
                        // token:payload
                    }  }
                    case CART_SUCCESS:{
                        return{
                            ...state,
                            loading:false,
                               }  }
                case CART_UPDATE:{
                    return{
                        ...state,
                        loading:false,
    
                        data:payload
                    }
            }
            case CART_DELETE:{
                return{
             ...state,
       data:state.data.filter((da)=>da._id!==payload)
                }
        }
        case CART_ERROR:{
            return{
                ...state,
                loading:false,
                error:true
            }
    }
        default:{
        return state
        }
}
}
export default cartReducer