import { Box, Button, Flex, Heading, Text, useDisclosure, useToast } from '@chakra-ui/react'
import Image from 'next/image'
import React, { useState,useEffect } from 'react'
import { ImLocation } from 'react-icons/im';
import { Input} from '@chakra-ui/react'
import { useRouter } from 'next/router';
type datatype={
  name:string|undefined
  email:string|undefined
  number:string| undefined
  address:string |undefined
}
let totalsum=0
const Checkout = () => {
  const rout=useRouter()
  const toast = useToast()
  const [buttdiv,setADDbutt]=useState (1)
  const [data,setData]=useState<datatype[]> ([])
  const [name,setName]=useState <string>("")
  const [email,setEmail]=useState<string>("")
  const [number,setNumber]=useState<string>("")
  const [address,setAddress]=useState<string>("")
  const datas:datatype={
    name:name,
    email:email,
    number:number,
    address:address
  }
  const savedata=()=>{
   setData([datas])
  }
  const successfull=()=>{
    toast({
      position: 'top',
      title: 'Payment successful.',
      description: "Your Order Has Been Confirmed",
      status: 'success',
      duration: 5000,
      isClosable: true,
    })
    rout.push("/")
  }
  return (
    <Box marginTop={'100px'}w='100%'>
<Box bg='bisque'>
            <Flex gap='30px'>
            <Heading>DELIVERY</Heading>
            <Box>
             {
              buttdiv===1?   <Button onClick={()=>setADDbutt(2)}>ADD ADDRESS</Button>
              :buttdiv===2 ? <Box>  <Input onChange={(e)=>setName(e.target.value)} value={name} type={"text"}  placeholder='Enter Your Name'/>
     <Input onChange={(e)=>setEmail(e.target.value)}  value={email} type={'email'} placeholder='Enter Your Email'/>
     <Input onChange={(e)=>setNumber(e.target.value)}  value={number} type={"number"} placeholder='Enter Your Mobile Number'/>
     <Input onChange={(e)=>setAddress(e.target.value)}  value={address} type={'text'} placeholder='Enter Your Address'/>
     <Button colorScheme='blue' mr={3}onClick={()=>{savedata(),setADDbutt(3)}} >Save</Button></Box>
     :buttdiv===3? <Box>
      <Heading size={"md"}>ADDRESS</Heading>
     <Text size={"md"}>{data[0].name}</Text>
     <Text size={"md"}>{data[0].email}</Text>
     <Text size={"md"}>{data[0].number}</Text>
     <Text size={"sm"}>{data[0].address}</Text>
     <Button onClick={()=>setADDbutt(2)}variant='link'>edit</Button>
     </Box> :""
             }
            </Box>

            </Flex>
        </Box>

        <Box  bg='bisque' marginTop={"60px"}>
            <Flex gap='30px'>
            <Heading>PICK UP INFO</Heading>
            <Box>
             <ImLocation/>
             <Button>Location</Button>
            </Box>
            </Flex>
        </Box>
        <Box margin="40px auto auto auto" w='45%'>
        <Input  type={'text'} placeholder='Enter Your Card Number' w='250px'/>
        <Input  type={'text'} placeholder="CV"w='60px'/>
        <Input  type={'date'}w='80px'/>
        <Text>or</Text>
     <Input type={"number"} placeholder='Enter Your @UPI Number' w='250px'/>
     <br />
    <Button margin={"20px"}  onClick={successfull} bg='red'w='150px'>Pay</Button>
        </Box>
     
    </Box>
  )
}
export default Checkout
