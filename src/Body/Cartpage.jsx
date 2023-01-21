
import { Box, Image,Heading, Button } from '@chakra-ui/react'
import React from 'react'
import { AllRoutes } from '../components/AllRoutes'
import { HomePage } from './HomePage'

export const CartPage = () => {
  const handelClick =()=>{
    <HomePage/>
  }
  return (
    
    <div>
      
          <Heading>Cart Page</Heading>
        <Image w={"400px"} h={"400px"} m={"50px"} ml={"450px"}src="https://images.meesho.com/images/pow/empty-cart.png"/>
      
        <Button w={"200px"} h={"50px"} border={"1px solid pink"}
         mb={"150px"} bgColor={"pink"} borderRadius={"10px"}  onClick={handelClick}>View Products</Button>

    </div>
  )
}
