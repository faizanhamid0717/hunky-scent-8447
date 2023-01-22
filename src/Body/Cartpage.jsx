
import { Box, Image,Heading, Button } from '@chakra-ui/react'
import React from 'react'
import { AllRoutes } from '../components/AllRoutes'
import { Products } from './ProductPage'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import { Card, CardHeader, CardBody, CardFooter,Stack,Text} from '@chakra-ui/react'



export const CartPage = () => {
  // const [cart,setCart]=useState([])

//  const handelClick=(()=>{
//     setCart([...cart,{id,title ,price}])
//   });

  return (
    
    <div>

      {/* ******************************************************************************* */}
          
        <Image w={"400px"} h={"400px"} m={"50px"} ml={"450px"}src="https://images.meesho.com/images/pow/empty-cart.png"/>
      <Link to="/products">
        <Button w={"200px"} h={"50px"} border={"1px solid pink"}
         mb={"150px"} mt={"50px"} bgColor={"pink"} borderRadius={"10px"} >View Products</Button>
     </Link>

    
    </div>
  )
}
