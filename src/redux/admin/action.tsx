
import { param, ProductAction } from "@/utills/types"
import { Appdispatch } from "../store"
import {  Adminapi,  } from "./api"
import { ADMIN_ERROR, ADMIN_GET, ADMIN_LOADING } from "./type"

export const Adminproduct=({filter, page, sort, order,limit,type}:param)=>async(dispatch:({type,payload}:ProductAction)=>void)=>{
    dispatch({type:ADMIN_LOADING})
    try{
        let data=await Adminapi({filter, page, sort, order,limit,type})
        dispatch({type:ADMIN_GET,payload:data.data,})
    }catch(e){
        dispatch({type:ADMIN_ERROR})
    }
}
