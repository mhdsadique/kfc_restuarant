import { param, Product } from '@/utills/types'
import axios, { AxiosResponse } from 'axios'
import { env } from 'process';
import React from 'react'
import { useParams } from "react-router-dom";
export const Adminapi = async({page,sort,order,filter,limit,type}:param) => {
    let res: AxiosResponse <Product[]> =await  axios({url:`https://smoggy-sheath-dress-fish.cyclic.app/product?${type}=${filter}`,
    method:"get",
      headers:{
        "Authorization":localStorage.getItem("token")
    }
  })
  return  res


}




