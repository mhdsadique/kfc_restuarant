import { Product, ProductAction, ProductState } from "@/utills/types";
import { PRODUCT_ERROR, PRODUCT_GET, PRODUCT_LOADING } from "./type";


const initialState:ProductState={
    loading:false,
    error:false,
    data:[]
}
const productReducer=(state:ProductState=initialState,{type,payload}:ProductAction):ProductState=>{
    switch(type){
        case PRODUCT_LOADING:{
            return{
                ...state,
                loading:true
            };
        }
              case PRODUCT_GET:{
                return{
                    ...state,
                    loading:false,
                    error:false,
                    data:payload
                }
        }
        case PRODUCT_ERROR:{
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
export default productReducer