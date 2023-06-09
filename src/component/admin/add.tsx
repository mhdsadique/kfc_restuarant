import { Box, Button, useToast } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import { Input } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export const Dataadd =() => {
  const toast = useToast();
  const rout=useRouter()
  const [image,setimage]=useState("")
  const [title,setTitile]=useState("")
  const [discription,setdiscription]=useState("")
  const [price,setprice]=useState("")
  const [itemfind,setitemfind]=useState("")
  const [findname,setfindname]=useState("")
  const [menu,setmenu]=useState("")
  const vegornonveg=(e:any)=>{
    setfindname(e)
  if(e=="NON VEG"){
    setitemfind("https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg")
  }
  if(e=="VEG"){
    setitemfind("https://online.kfc.co.in/static/media/Veg_dot_Icon.d1a3902d.svg")
  }
  }
const payload={
  image:image,
  title:title,
  discription:discription,
  price:price,
  itemfind:itemfind,
  findname:findname ,
  menu:menu
}

const submitdata=()=>{
    axios.post("https://smoggy-sheath-dress-fish.cyclic.app/product/create",payload)
    .then(re=>{console.log(re)
      if(re.data.msg=="User notes addedd successfully"){

            toast({
              title: "Success",
              description: "Product has been Added succesfully .",
              status: "success",
              duration: 3000,
              isClosable: true,
            })
            rout.reload()
      }else{
        toast({
          title: "Not Added",
          description: "Product Not Added.",
          status: "error",
          duration: 3000,
          isClosable: true,
        })
      }
}
)
    .catch(er=>{console.log(er),  
       toast({
      title: "Not Added",
      description: "Product Not Added.",
      status: "error",
      duration: 3000,
      isClosable: true,
    })})
    console.log(payload)
}
  return (
    <Box marginTop={'100px'}>
      <Input placeholder='image'value={image} onChange={(e)=>setimage(e.target.value)} />
      <Input placeholder='title'value={title} onChange={(e)=>setTitile(e.target.value)} />
      <Input placeholder='discription'value={discription} onChange={(e)=>setdiscription(e.target.value)} />
      <Input placeholder='price'value={price} onChange={(e)=>setprice(e.target.value)} />

      {/* <Input placeholder='itemfind'value={itemfind} onChange={(e)=>setitemfind(e.target.value)} /> */}
       <select name="" id="" value={findname} onChange={(e)=>vegornonveg(e.target.value)}>
       {/* <select name="" id="" value={findname} onChange={(e)=>setfindname(e.target.value)}> */}
        <option value="">VEG or NON VEG</option>
        <option value="NON VEG">NON VEG</option>
        <option value="VEG"> VEG</option>
       </select>
       <select name="" id="" value={menu} onChange={(e)=>setmenu(e.target.value)}>
        <option value="">MENU</option>
        <option value="exclusive deal">EXCLUSIVE DEAL</option>
        <option value="chizza">CHIZZA </option>
        <option value="chicken buckets">CHICKEN BUCKETS </option>
        <option value="new launch">NEW LAUNCH </option>
        <option value="biriyani buckets">BIRYANI BUCKETS </option>
        <option value="box meals">BOX MEALS </option>
        <option value="burgers">BURGERS</option>
        <option value="snacks">SNACKS </option>
       </select>
      <Button  size='md'
  height='48px'
  width='200px'
  border='2px'
  borderColor='green.500' onClick={submitdata}>ADD DATA</Button>
    </Box>
  )
}