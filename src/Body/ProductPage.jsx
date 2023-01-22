import { useState } from 'react'
import React from 'react'
import { useEffect } from 'react'
import axios from "axios"
import { Grid, GridItem ,Box,useColorModeValue, Heading,Divider,Link} from '@chakra-ui/react'
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
        {/* <Link to='/products'></Link> */}
        {/* <Heading>Products For You</Heading> */}
         
        <Divider border={"0.5px solid gray.600"} mt={"15px"} mb={"15px"}/>

<Box w={"1100px"} h={"100%"}  ml={"100px"} display={"grid"} gridTemplateColumns={"repeat(2,0px)"} >

 <Box w={"350px"} h={"820px"}  border={"1px solid #E7EEFF"} borderRadius={"10px"} > <SortFilter/> </Box>

<Box w={"700px"} h={"100%"} border={"1px solid #E7EEFF"} ml={"400px"} borderRadius={"10px"}> 
    <Grid gridTemplateColumns="repeat(3,230px)">
    
        {data ?.map ((ele)=>
       <GridItem key={ele.id}  >
        
        <ProductCart title={ele.title} image={ele.image} 
        price={ele.price} category={ele.category}
         rat={ele.rating.rate} id={ele.id}/>
        
       </GridItem>
   )}
    </Grid>
 </Box> 

 </Box> 
    </div>
  )
}
