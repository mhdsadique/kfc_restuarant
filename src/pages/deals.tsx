import { Errors } from '@/component/error'
import { Datascompo } from '@/component/menu/data'
import Skeleten from '@/component/skeleten'
import {  getProduct } from '@/redux/product/action'
import { ProductState } from '@/utills/types'
import { Box, Button, Flex, Heading, Select, SimpleGrid, Text } from '@chakra-ui/react'
import React, { Dispatch, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from "react-router-dom";
//  import {}from "react-"
 const Deals = () => {
  const {data,error,loading}:ProductState=useSelector((store:any)=>store.product)
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('price');
  const [order, setOrder] = useState('');
  const [type, setType] = useState('');
  const [limit, setlimit] = useState();
  // const { target } = useParams();
  console.log(data)
  const dispatch : Dispatch<any>=useDispatch()
  useEffect(()=>{
    dispatch(getProduct({filter, page, sort, order,limit,type}))
  },[filter, page, sort, order,limit,type])

  if(error)return <Errors/>

  return (
    <Box marginTop={'120px'}position='relative'>
      <Box position={'fixed'}top='80px'margin={'auto'}  borderRadius={'25%'}w='90%'>
       <Flex gap='10px' justifyContent={"end"}>
        <Text >(Items-{data.length})</Text>
        <Select w='160px' value={order} onChange={(e)=>setOrder(e.target.value)}size='lg' >
        <option value={''}>SortBy</option>
        <option value='asc'>Low To High</option>
        <option value='desc'>High To Low</option>
        </Select>
          <Button onClick={()=>{setFilter(''),setType("")}}>ALL</Button>
          <Button bg='red' onClick={()=>{setFilter('NON VEG'),setType("findname")}}>NON VEG</Button>
          <Button bg='green' onClick={()=>{setFilter('VEG'),setType("findname")}}>VEG</Button>
        </Flex>
      </Box>
      <Box w='80%'margin={'auto'}>
        {
            loading ? <Skeleten/>:
            <SimpleGrid  gap={'10px'} columns={{lg:3,md:2,sm:1}}>
            {
              data.map((e,i)=><Datascompo key={i}  {...e}/>)
            }
            </SimpleGrid>
        }
        </Box>
    </Box>
  )
}
export default Deals