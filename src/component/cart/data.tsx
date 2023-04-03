import Cart from '@/pages/cart'
import { deletecart } from '@/redux/cart/action'
import { Product, ProductState } from '@/utills/types'
import { Box, Button, Flex, Heading, Text, useToast } from '@chakra-ui/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React ,{Dispatch, useEffect, useState}from 'react'
import { useDispatch, useSelector } from 'react-redux'
 let totalsum:any=0
let sum:number =0
export const Datacart = (datas:any) => {
  const dispatch : Dispatch<any>=useDispatch()

  const rout=useRouter()
  const toast = useToast()
  const [count,setCount]=useState(1)
    if(count===1){
      sum=datas.price*count
      totalsum=totalsum+sum
    }
    // new Intl.NumberFormat("en-IN", {
    //   style: "currency",
    //   currency: "INR",
    // }).format(sum)
    // localStorage.setItem("sum",sum)
    const setCounterminus=()=>{
      let co=count-1
      setCount(co)
      if(co==1){
        totalsum=totalsum-datas.price-datas.price
      }else
      totalsum=totalsum-datas.price
    }
    const setCounterplus=()=>{
      let co=count+1
      setCount(co)
      if(co!=1){
            totalsum=totalsum+datas.price
           }
    }
              localStorage.setItem("sum",totalsum)
// const deletedata=(id)=>{
//   dispatch(deletecart(id))
//   toast({
//     position: 'top',
//     title: 'Delete successful.',
//     description: "Item Remove Has Been Completed",
//     status: 'success',
//     duration: 5000,
//     isClosable: true,
//   })
//   rout.reload()
// }
  return (
    <Box  margin={'30px auto auto auto'}  boxShadow='2xl' p='6' rounded='md' backgroundColor='white'>
      <Flex gap='10px'><Box>  
      <img width={250}height={150} src={datas.image}alt="imga" />
        <Text>{datas.title}</Text>
      </Box>

 <Flex alignItems="center"  gap='20px'>
        <Heading size={'md'}>₹{count*datas.price}</Heading>
        <Box><Flex alignItems={'center'}gap='10px'>
          <button style={{width:"30px",height:"30px",backgroundColor:"wheat",borderRadius:"5px"}} disabled={count==1} onClick={()=>setCounterminus()}>-</button>
          <Heading size={'md'}>{count}</Heading>
          <button  style={{width:"30px",height:"30px",backgroundColor:"wheat",borderRadius:"5px"}} onClick={()=>setCounterplus()}>+</button>
        </Flex>
        </Box></Flex>
        <Button onClick={()=>dispatch(deletecart(datas._id))} variant={'link'}color='red'>Remove</Button>
        </Flex>

    </Box>
  )
}
