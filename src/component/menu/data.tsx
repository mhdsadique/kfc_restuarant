
import { postCart } from '@/redux/cart/action'
import { Product, ProductState } from '@/utills/types'
import { Box, Button, Flex,  Heading, Text, useToast } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React ,{Dispatch, useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
export const Datascompo = (data:Product) => {
  const rout=useRouter()
  const toast = useToast()
  const [token,setToken]=useState("")
  useEffect(()=>{
    let tokens=  localStorage.getItem("token")
    setToken(tokens) },[])
  const dispatch : Dispatch<any>=useDispatch()
const addtocart=()=>{
 if(token){
   dispatch(postCart(data))
   toast({
    position: 'top',
    title: 'Item Added successfully.',
    description: "Your Item Has Been Added Successfully",
    status: 'success',
    duration: 5000,
    isClosable: true,
  })}
 else{
  toast({
    position: 'top',
    title: 'Something Went Wrong.',
    description: "Please Sign In first.",
    status: 'error',
    duration: 9000,
    isClosable: true,
  })
rout.push("/signup")
 }}
  return (
    <Box  boxShadow='base' p='2' rounded='md' bg='white' display={'flex'}flexDirection='column' h={{lg:'auto',md:"auto",sm:"auto"}}>
        <img src={data.image}alt="imga" />
        <Text>{data.title}</Text>
        <Flex>
        <img style={{width:"15px"}} src={data.itemfind} alt="imga" />
        <Text>{data.findname}</Text>
        </Flex>
        <Heading size={'md'}>₹{data.price}</Heading>
        <Text>{data.discription}</Text>
        <Button onClick={addtocart} position='static' marginLeft={'auto'} marginRight='auto' marginTop={'auto'}  bg='#e4002b' w='200px' borderRadius={'25px'}>ADD TO CART</Button>
    </Box>
  )
}
