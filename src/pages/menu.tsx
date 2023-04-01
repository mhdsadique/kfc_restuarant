import Menunavbar from '../component/menu/menunavbar'
import { getProduct } from '@/redux/product/action'
import {  Product, ProductState } from '@/utills/types'
import { Box, Button, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import axios from 'axios'
import Image from 'next/image'
import style from "../stles/menu.module.css"
import React, { Dispatch, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Skeleten from '@/component/skeleten'
import { Datamap } from '@/component/menu/data.map'
import { Errors } from '@/component/error'
 const Menu = () => {
  const {data,error,loading}:ProductState=useSelector((store:any)=>store.product)
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState();
  const [order, setOrder] = useState("");
  const [limit, setlimit] = useState();
  const dispatch : Dispatch<any>=useDispatch()
  useEffect(()=>{
      dispatch(getProduct({filter, page, sort, order,limit}))
    },[filter, page, sort, order,limit])
    if(loading)return <Skeleten/>
    if(error)return <Errors/>
  return (
    <Box marginTop={{lg:"78px",md:'140px',sm:"140px"}} w={'100%'}>
    <Box margin={'auto'} w={{lg:"80%",md:"90%",sm:"90%"}} display={{lg: 'flex',md: 'grid',sm:"grid"}} >
    <Menunavbar />
    <Datamap data={data}/>
    </Box>
       </Box>
  )}
export default Menu