
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Input,
    Box,
    Heading,
    Text,
    useToast,
  } from '@chakra-ui/react'
  import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react'
export const Updatemodal=(data)=> {
    const toast = useToast();
    const rout=useRouter()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [image,setimage]=useState("")
  const [title,setTitile]=useState("")
  const [discription,setdiscription]=useState("")
  const [price,setprice]=useState("")
  const [itemfind,setitemfind]=useState("")
  const [findname,setfindname]=useState("")
  const [menu,setmenu]=useState("")
  const payload={
       image:image,
       title:title,
       discription:discription,
    price:price,
    itemfind:itemfind,
    findname:findname ,
    menu:menu
      }

const submitdata=async(id)=>{
    try{
        const response = await axios .patch(`https://smoggy-sheath-dress-fish.cyclic.app/product/update/${id}`, {
            image:image,
            title:title,
            discription:discription,
         price:price,
         itemfind:itemfind,
         findname:findname ,
         menu:menu
               })
                toast({
                  title: "Success",
                  description: "Product has been succesfully Updated.",
                  status: "success",
                  duration: 3000,
                  isClosable: true,
                });
           rout.reload()
    }catch(e){
        toast({
            title: "not update",
            description: "Product not Updated.",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        console.log(e)
    }
    }
    return (
      <>
<Button onClick={onOpen} position='static' marginLeft={'auto'} marginRight='auto' marginTop={'auto'}  bg='green' w='200px' borderRadius={'25px'}>UPDATE</Button>
<Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
    <ModalHeader>Update Product</ModalHeader>
    <ModalCloseButton />
    <ModalBody pb={6}>
    <Box>
                <Heading size={"md"}>{data.data.title}</Heading>
 <Text>product_id - {data.data._id}</Text>
 <Heading size={'md'}>Old</Heading>
      <Input readOnly placeholder='image'value={data.data.image}  />
      <Input readOnly  placeholder='title'value={data.data.title}  />
      <Input readOnly placeholder='discription'value={data.data.discription} />
      <Input readOnly placeholder='price'value={data.data.price} />
      <Input readOnly placeholder='itemfind'value={data.data.itemfind} />
       <select  name="" id="" value={data.data.findname} >
        <option value="">VEG or NON VEG</option>
        <option value="NON VEG">NON VEG</option>
        <option value="VEG"> VEG</option>
       </select>
       <select  name="" id="" value={data.data.menu}>
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
       <br />
       <Heading size={'md'}>Update</Heading>
      <Input placeholder='Update image'value={image} onChange={(e)=>setimage(e.target.value)}/>
      <Input placeholder='Update title'value={title} onChange={(e)=>setTitile(e.target.value)} />
      <Input placeholder='discription'value={discription} onChange={(e)=>setdiscription(e.target.value)} />
      <Input placeholder='price'value={price} onChange={(e)=>setprice(e.target.value)} />
      <Input placeholder='itemfind'value={itemfind} onChange={(e)=>setitemfind(e.target.value)} />
       <select name="" id="" value={findname} onChange={(e)=>setfindname(e.target.value)}>
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
       </select> </Box>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme='blue' mr={3}onClick={()=>submitdata(data.data._id)}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )}