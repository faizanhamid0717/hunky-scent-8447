import { Box ,Text,Select,useColorModeValue, Divider} from '@chakra-ui/react'
import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
    
  } from '@chakra-ui/react'
  import { ChevronDownIcon } from '@chakra-ui/icons'


export const SortFilter = () => {
  return (
    <div>
     <Text fontSize={"xl"} mr={"230px"} color={useColorModeValue('gray.500', 'gray.800')}>Sort By :</Text>
        <Select w={"200px"} h={"50px"} ml={"22px"} color={useColorModeValue('gray.500', 'gray.800')} placeholder={"--"}> 
            <option >Price (High to Low)</option>
            <option>Price (Low to High)</option>
        </Select>

<Divider border={"0.5px solid gray.600"} mt={"15px"}/>
     {/* ***************************Filter*************************** */}

    <Text mt={"20px"} mr={"250px"} fontSize={"2xl"}>Filters</Text>
     <Text fontSize={"sm"}  mr={"230px"} color={useColorModeValue('gray.500', 'gray.800')}>100+ Products</Text>

        {/* <Select w={"300px"} h={"60px"} ml={"22px"} color={useColorModeValue('gray.500', 'gray.800')} placeholder={"--"}> 
            <option >Price (High to Low)</option>
            <option>Price (Low to High)</option>
        </Select> */}
     
<Menu>
    <MenuButton as={Button} bg={useColorModeValue('gray.100', 'gray.800')}
     fontSize={"xl"} mr={"230px"} 
     color={useColorModeValue('gray.900', 'gray.800')} w={"300px"} h={"60px"} ml={"20px"}>
     Gender  <ChevronDownIcon ml={"160px"}/>
    </MenuButton>
  <MenuList >
    <MenuItem color={"red"}>Sarees</MenuItem>  
    <MenuItem>All Sarees </MenuItem>
    <MenuItem>Silk Sarees </MenuItem>
    <MenuItem>Cotton Sarees</MenuItem>
    <MenuItem>Chiffon Sarees</MenuItem>
    
    <MenuItem color={"red"}>Kurtis</MenuItem>
  </MenuList>
</Menu>
       
    </div>
  )
}
