import { Box, Button, Heading } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Dataadd } from '@/component/admin/add'
import { Admindata } from '@/component/admin/get/data.map'
import { useDispatch, useSelector } from 'react-redux'
import { ProductState } from '@/utills/types'
import { Dispatch } from 'redux'
import Skeleten from '@/component/skeleten'
import { Errors } from '@/component/error'
import { Adminproduct } from '@/redux/admin/action'
 const Admin =() => {
  const {data,error,loading}:ProductState=useSelector((store:any)=>store.admin)
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState();
  const [order, setOrder] = useState("");
  const [limit, setlimit] = useState();
  const [type, setType] = useState('');
  const dispatch : Dispatch<any>=useDispatch()
  useEffect(()=>{
    dispatch(Adminproduct({filter, page, sort, order,limit,type}))
  },[filter, page, sort, order,limit,type])
  // if(loading)return <Skeleten/>
  if(error)return <Errors/>
  return (
    <Box w='100%' marginTop={'100px'}>
      <Dataadd />
      {
        loading?<Skeleten/> :<Box>
        <Box w='50%' margin='50px auto auto auto'>
     <Button onClick={()=>{setFilter(''),setType("")}}>ALL</Button>
          <Button bg='red' onClick={()=>{setFilter('NON VEG'),setType("findname")}}>NON VEG</Button>
          <Button bg='green' onClick={()=>{setFilter('VEG'),setType("findname")}}>VEG</Button>
     </Box>
     <Admindata data={data}/></Box>
      }
    
     
    </Box>
  )
}
export default Admin