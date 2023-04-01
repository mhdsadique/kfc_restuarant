
import { param, ProductAction } from "@/utills/types"
import { Appdispatch } from "../store"
import {  Productapi } from "./api"
import { PRODUCT_ERROR, PRODUCT_GET, PRODUCT_LOADING } from "./type"

export const getProduct=({filter, page, sort, order,limit,type}:param)=>async(dispatch:({type,payload}:ProductAction)=>void)=>{
    dispatch({type:PRODUCT_LOADING})
    try{
        let data=await Productapi({filter, page, sort, order,limit,type})
        dispatch({type:PRODUCT_GET,payload:data.data,})
    }catch(e){
        dispatch({type:PRODUCT_ERROR})
    }
}
