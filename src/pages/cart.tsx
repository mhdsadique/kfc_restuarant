import { Checkout } from '@/component/cart/checkout'
import { Datacart } from '@/component/cart/data'
import { Emty } from '@/component/cart/emty'
import { Errors } from '@/component/error'
import Skeleten from '@/component/skeleten'
import { getCart } from '@/redux/cart/action'
import { Product, ProductState } from '@/utills/types'
import { Box, Button, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch } from 'redux'
 const Cart = () => {
  const dispatch : Dispatch<any>=useDispatch()
  const {data,error,loading}:ProductState=useSelector((store:any)=>store.cart)
       useEffect(()=>{
        dispatch(getCart())
       },[])
if(loading)return <Skeleten/>
if(error)return <Errors/>
  return (
    <Box marginTop={'80px'} width='100%'>
      <Flex alignItems={"center"}>
        <Heading>MY CART</Heading>
        <Text>(Item-{data.length})</Text>
      </Flex>
        {
          data.length==0?  <Emty/>:<Box ><SimpleGrid columns={{lg:2,md:1,sm:1}}>
  <Box margin={'50px auto auto 15%'}>
  {
    data?.map((e:Product,i)=> <Datacart key={i} {...e}/>)
  }
  </Box>
   <Box position={{lg:"fixed",md:"static",sm:"static"}} top="25%"right={"25%"}>
    <Checkout/>

   </Box></SimpleGrid>
   </Box>
   }
    </Box>
  )
}

export default Cart
