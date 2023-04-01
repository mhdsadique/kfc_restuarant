import { deletecart } from '@/redux/cart/action'
import { Product, ProductState } from '@/utills/types'
import { Box, Button, Flex, Heading, Text, useToast } from '@chakra-ui/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React ,{useState}from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch } from 'redux'
 let sum=0
export const Datacart = (datas:any) => {
  const rout=useRouter()
  const toast = useToast()
  let subtotal = 0;
  const dispatch : Dispatch<any>=useDispatch()
    const [count,setCount]=useState(1)
    if(count===1){
   subtotal=subtotal+(count*datas.price)
    }else{
      subtotal=subtotal+(((count-(count-1))*datas.price)) }
    sum=sum+subtotal
    // new Intl.NumberFormat("en-IN", {
    //   style: "currency",
    //   currency: "INR",
    // }).format(sum)
    localStorage.setItem("sum",sum)
const deletedata=()=>{
  dispatch(deletecart(datas._id))
  toast({
    position: 'top',
    title: 'Delete successful.',
    description: "Item Remove Has Been Completed",
    status: 'success',
    duration: 5000,
    isClosable: true,
  })
  rout.reload()
}
  return (
    <Box  margin={'30px auto auto auto'}  boxShadow='2xl' p='6' rounded='md' bg='white'>
      <Flex gap='10px'><Box>  
      <img width={250}height={150} src={datas.image}alt="imga" />
        <Text>{datas.title}</Text>
      </Box>
 <Flex alignItems="center"  gap='20px'>
        <Heading size={'md'}>₹{count*datas.price}</Heading>
        <Box><Flex alignItems={'center'}gap='10px'>
          <button style={{width:"30px",height:"30px",backgroundColor:"wheat",borderRadius:"5px"}} disabled={count==1} onClick={()=>setCount(count-1)}>-</button>
          <Heading size={'md'}>{count}</Heading>
          <button  style={{width:"30px",height:"30px",backgroundColor:"wheat",borderRadius:"5px"}} onClick={()=>setCount(count+1)}>+</button>
        </Flex>
        </Box></Flex>
        <Button onClick={deletedata} variant={'link'}color='red'>Remove</Button>
        </Flex>

    </Box>
  )
}
