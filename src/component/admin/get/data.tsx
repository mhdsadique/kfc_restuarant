
import { postCart } from '@/redux/cart/action'
import { Product, ProductState } from '@/utills/types'
import { Box, Button, Flex,  Heading, Text, useToast } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React ,{Dispatch, useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Updatemodal } from '../update/modal'
import axios from 'axios'
export const Getdata = (data:Product) => {
  const rout=useRouter()
  const toast = useToast()
 const deletedata= async(id)=>{
  try{
    await axios.delete(`https://smoggy-sheath-dress-fish.cyclic.app/product/delete/${id}`)
      toast({
        position: 'top',
        title: "Success",
        description: "Product succesfully Deleted.",
        status: "success",
        duration: 3000,
        isClosable: true,
    });
    rout.reload()
  }catch(e){
    toast({
      position: 'top',
      title: "not deleted",
      description: "Product did not Deleted.",
      status: "error",
      duration: 3000,
      isClosable: true,
  });
    console.log(e)
  }
 }
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
        <Updatemodal data={data}/>
        {/* <Button onClick={updatedata} position='static' marginLeft={'auto'} marginRight='auto' marginTop={'auto'}  bg='green' w='200px' borderRadius={'25px'}>UPDATE</Button> */}
        <Button onClick={()=>deletedata(data._id)} position='static' marginLeft={'auto'} marginRight='auto' marginTop={'auto'}  bg='#e4002b' w='200px' borderRadius={'25px'}>DELETE</Button>
    </Box>
  )
}
