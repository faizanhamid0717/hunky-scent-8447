



import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
    Link,
    
  } from '@chakra-ui/react';
import { useState,useEffect } from 'react';
 import axios from "axios"
import { useParams } from 'react-router-dom';



export const  ProductDetail = () => {
  const [data,setData]=useState([])
  // const [cart,setCart]=useState([])

  // console.log(cart)

  const {id}=useParams()
  console.log(id)

const getData=(id)=>{
  return(
      axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((res)=>{
          console.log(res.data)
          setData(res.data)
      })
      .catch((error)=>{
          console.log(error)
      })
  )
  
}

// const handelClick=(()=>{
//   setCart([...cart,{id,title ,price}])
// });

useEffect(()=>{
  getData(id)
},[id])

// const handelClick=()=>{
//   setCart([...cart,{id,price,title}])
// }

 const{image,title,price,description
 }=data
    return (
    
      <div>
        {/* <h1>Singel Product Page</h1> */}
      <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex>
          
            <Image
            border={"1px solid gray"}
            p={"40px"}
              rounded={'md'}
              alt={'product image'}
              // src={
              //   'https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080'
              // }
              src={image}
              fit={'cover'}
              align={'center'}
              w={'100%'} h={"80%"}
              // h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '1xl', sm: '2xl', lg: '1xl' }}>
                {/* Automatic Watch */}
                {title}
              </Heading>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'5xl'}>
                Price : ₹ {price}
              </Text>
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'1xl'}
                  fontWeight={'300'}>
                  
                  {description}
                </Text>
               
              </VStack>
              <Box>
                
  
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  
                 <Image h={"150px"} w={"1000px"} src="https://images.meesho.com/images/marketing/1588578650850.webp"/>
                </SimpleGrid>
              </Box>
              
            </Stack>
  
            <Button
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              bg={useColorModeValue('gray.900', 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }} >
                
             Add To Cart
            </Button>
  
            <Stack direction="row" alignItems="center" justifyContent={'center'}>
            
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
      </div>
    );
    
  }

  export default ProductDetail