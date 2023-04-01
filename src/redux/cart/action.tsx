import { Product, ProductAction } from "@/utills/types"
import { Appdispatch } from "../store"
import {  CartDelete, CartGet, CartPost } from "./api"
import { CART_ADD, CART_DELETE, CART_ERROR, CART_GET, CART_LOADING } from "./type"


export const getCart=()=>async(dispatch:({type,payload}:ProductAction)=>void)=>{
    dispatch({type:CART_LOADING})
    try{
        let data=await CartGet()
        dispatch({type:CART_GET,payload:data})  
    }catch(e){
        dispatch({type:CART_ERROR})
    }
}
export const postCart=(data:Product)=>async(dispatch:Appdispatch)=>{
    dispatch({type:CART_LOADING})
    try{
         let datas=  await CartPost(data)
 dispatch({type:CART_ADD,payload:datas})
    }catch(e){
        dispatch({type:CART_ERROR})
    }
}

export const deletecart=(id:Number)=>async(dispatch:Appdispatch)=>{
    dispatch({type:CART_LOADING})
    try{
         let datas=  await CartDelete(id)
 dispatch({type:CART_DELETE,payload:datas})
    }catch(e){
        dispatch({type:CART_ERROR})
    }
}