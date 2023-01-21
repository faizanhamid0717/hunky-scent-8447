



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
// import {Link} from 


//   const initialstate={
//     product:[],
//     isLoading:true,
//     isError:""
// }

// const reducer=(state,action)=>{
//     // console.log("state" ,state)
//     // console.log("statement",action.payload)
//        switch (action.type){
//         case "FETCH-SUCCESS":
//             return {
//                 ...state,
//                 product : action.payload,
//                 isloading:false,
//                 isError:false
//             }
//         case "FETCH-UNSUCCESSFUL":
//             return{
               
//                 product:[],
//                 isLoading : false,
//                 isError:"some thing went wrong"

//             }
//             default:
//                 throw new Error()
//        }
// }
  
  
//    function ProductDetail(){

//     const [data,setData]=useState([])
//   //  const {isLoading,isError,product}=state
//    
//   //  const {image,title,discription,price,rating,category}=product

//    const getData=async ()=>{
     
//         axios.get(`https://fakestoreapi.com/products/${id}`)
//     .then((res)=>{
//          console.log(res.data)
//          setData(res.data)
//     })
//     .catch((error)=>{
//       console.log(error)
//     })
// }

// useEffect(()=>{
//     getData()
// },[id])


export const  ProductDetail = ({image,title,discription,price,rating,category,id}) => {
  const [data,setData]=useState([])
  const param=useParams(id)
  // console.log(param)

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

useEffect(()=>{
  getData(param.id)
},[param.id])

    return (

       
      <Container maxW={'7xl'}>
        {/* <Link to="/products"></Link> */}

        <Heading>Singel</Heading>

        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex>
            <Image
              rounded={'md'}
              // alt={'image'}
              src={image}
              
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              Title : {title}
              </Heading>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}>
                Price : {price}
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
                  fontSize={'2xl'}
                  fontWeight={'300'}>
                 Category :  {category}
                </Text>
                <Text fontSize={'lg'}>
                 {discription}
                </Text>
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                Rating : {rating}
                </Text>
  
                  <Image src="https://images.meesho.com/images/marketing/1588578650850.webp"/>
               
              </Box>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                 
                </Text>
  
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
              }}>
              Add to cart
            </Button>
  
            <Stack direction="row" alignItems="center" justifyContent={'center'}>
             
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    
    )
  }

  export default ProductDetail