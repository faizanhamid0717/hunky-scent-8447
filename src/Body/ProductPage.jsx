import { useState } from 'react'
import React from 'react'
import { useEffect } from 'react'
import axios from "axios"
import { Grid, GridItem ,Box,useColorModeValue} from '@chakra-ui/react'
import ProductCart from './ProductCard'
import { SortFilter } from './SortFilterPage'


export const Products = () => {
    const [data,setData]=useState([])

const getData=()=>{
    return(
        axios.get(`https://fakestoreapi.com/products`)
        .then((res)=>{
            console.log(res.data)
            setData(res.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    )
    
}

useEffect(()=>{
    getData()
},[])

  return (
    <div>
<Box w={"1100px"} h={"100%"} border={"1px solid red"} ml={"100px"} display={"grid"} gridTemplateColumns={"repeat(2,0px)"} >

 <Box w={"350px"} h={"1000px"} border={"1px solid orange"} bgColor={useColorModeValue('gray.50', 'gray.800')}> <SortFilter/> </Box>

<Box w={"700px"} h={"100%"} border={"1px solid green"} ml={"400px"} > 
    <Grid gridTemplateColumns="repeat(3,230px)">
        {data ?.map ((ele)=>
       <GridItem key={ele.id}  >
        <ProductCart title={ele.title} image={ele.image} price={ele.price} category={ele.category} rat={ele.rating.rate}/>
       </GridItem>
   )}
    </Grid>
 </Box> 

 </Box> 
    </div>
  )
}
