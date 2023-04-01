// import React,{useState} from 'react'
// import {
//   Modal, ModalOverlay, ModalContent,
//   ModalHeader, ModalFooter, ModalBody,
//   ModalCloseButton, Button,useDisclosure, Input,} from '@chakra-ui/react'
// type Datatype={
//   name:String|undefined
//   email:String|undefined
//   number:Number | String| undefined
//   address:String |undefined
// }
// export const Modalcheckout = (savedata) => {
//   // const [data,setData]=useState ({})
//   const [name,setName]=useState("")
//   const [email,setEmail]=useState("")
//   const [number,setNumber]=useState("")
//   const [address,setAddress]=useState("")
//   const { isOpen, onOpen, onClose } = useDisclosure()
//   const datas:Datatype={
//     name:name,
//     email:email,
//     number:number,
//     address:address
//   }
// //   const savedata=()=>{
// // setData(datas)
// //   }
//   // console.log(data)
//   return (<>
//         <Button onClick={onOpen}>ADD ADDRESS</Button>
//         <Modal isOpen={isOpen} onClose={onClose}>
//           <ModalOverlay />
//           <ModalContent>
//             <ModalHeader>ADD YOUR ADDRESS</ModalHeader>
//             <ModalCloseButton />
//             <ModalBody>
//     <Input onChange={(e)=>setName(e.target.value)} value={name} type={"text"}  placeholder='Enter Your Name'/>
//     <Input onChange={(e)=>setEmail(e.target.value)}  value={email} type={'email'} placeholder='Enter Your Email'/>
//     <Input onChange={(e)=>setNumber(e.target.value)}  value={number} type={"number"} placeholder='Enter Your Mobile Number'/>
//     <Input onChange={(e)=>setAddress(e.target.value)}  value={address} type={'text'} placeholder='Enter Your Address'/>
//                   </ModalBody>
  
//             <ModalFooter>
//               <Button colorScheme='blue' mr={3}onClick={()=>savedata(datas)} >
//                 Save
//               </Button>
//               <Button variant='ghost' onClick={onClose}>Close</Button>
//             </ModalFooter>
//           </ModalContent>
//         </Modal>
//       </>
//     )
//   }