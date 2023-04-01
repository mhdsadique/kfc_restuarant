
import { Product } from '@/utills/types'
import axios, { AxiosResponse } from 'axios'
import React from 'react'

export const CartGet = async() => {
try{
  let res: AxiosResponse <Product[]> =await axios.get("https://smoggy-sheath-dress-fish.cyclic.app/cart/cart_get",{
  headers:{
    "Authorization":localStorage.getItem("token")
  }
})
return  res.data
}catch(e){
  console.log(e)
}
}

export const CartPost=async(data:Product)=>{
  try{
    let res: AxiosResponse <Product> = await axios({url:`https://smoggy-sheath-dress-fish.cyclic.app/cart/cart_add`,
    method:"post",
    data,
      headers:{
        "Authorization":localStorage.getItem("token")
    }})
  return res

  }catch(e){
    console.log(e)
  }
}


export const CartDelete = async(id:Number) => {
  try{
    let res: AxiosResponse <Product> =await axios.delete(`https://smoggy-sheath-dress-fish.cyclic.app/cart/cart_delete/${id}`,{
      headers:{
        "Authorization":localStorage.getItem("token")
      }
    })
  return  res.data
  }catch(e){
    console.log(e)
  }
  }
  
// export const CartUpdate= async(id) => {
//   try{
//     let res: AxiosResponse <Product[]> =await axios.get(`https://smoggy-sheath-dress-fish.cyclic.app/cart/cart_update/:${id}`)
//   return  res.data
//   }catch(e){
//     console.log(e)
//   }
//   }