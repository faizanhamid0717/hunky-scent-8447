import { Box ,Text,Select,useColorModeValue, Divider, Image} from '@chakra-ui/react'
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
        <Select w={"300px"} h={"50px"} ml={"22px"} color={useColorModeValue('gray.500', 'gray.800')} placeholder={"--"}> 
            <option >Price (High to Low)</option>
            <option>Price (Low to High)</option>
        </Select>

<Divider border={"0.5px solid gray.600"} mt={"15px"}/>
     {/* ***************************Filter*************************** */}

    <Text mt={"20px"} mr={"250px"} fontSize={"2xl"}>Filters</Text>
     <Text fontSize={"sm"}  mr={"230px"} color={useColorModeValue('gray.500', 'gray.800')}>100+ Products</Text>

        
     
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
       
<Divider border={"0.5px solid gray.600"} mt={"15px"} mb={"15px"}/>

<Menu>
    <MenuButton as={Button} bg={useColorModeValue('gray.100', 'gray.800')}
     fontSize={"xl"} mr={"230px"} 
     color={useColorModeValue('gray.900', 'gray.800')} w={"300px"} h={"60px"} ml={"20px"}>
     Color  <ChevronDownIcon ml={"160px"}/>
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

<Divider border={"0.5px solid gray.600"} mt={"15px"} mb={"15px"}/>

<Menu>
    <MenuButton as={Button} bg={useColorModeValue('gray.100', 'gray.800')}
     fontSize={"xl"} mr={"230px"} 
     color={useColorModeValue('gray.900', 'gray.800')} w={"300px"} h={"60px"} ml={"20px"}>
     Price <ChevronDownIcon ml={"160px"}/>
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

<Divider border={"0.5px solid gray.600"} mt={"15px"} mb={"15px"}/>
<Menu>
    <MenuButton as={Button} bg={useColorModeValue('gray.100', 'gray.800')}
     fontSize={"xl"} mr={"230px"} 
     color={useColorModeValue('gray.900', 'gray.800')} w={"300px"} h={"60px"} ml={"20px"}>
     Rating  <ChevronDownIcon ml={"160px"}/>
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

<Divider border={"0.5px solid gray.600"} mt={"15px"} mb={"15px"}/>

<Menu>
    <MenuButton as={Button} bg={useColorModeValue('gray.100', 'gray.800')}
     fontSize={"xl"} mr={"230px"} 
     color={useColorModeValue('gray.900', 'gray.800')} w={"300px"} h={"60px"} ml={"20px"}>
     Material  <ChevronDownIcon ml={"160px"}/>
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

<Divider border={"0.5px solid gray.600"} mt={"15px"} mb={"15px"}/>
<Menu>
    <MenuButton as={Button} bg={useColorModeValue('gray.100', 'gray.800')}
     fontSize={"xl"} mr={"230px"} 
     color={useColorModeValue('gray.900', 'gray.800')} w={"300px"} h={"60px"} ml={"20px"}>
     Brand  <ChevronDownIcon ml={"160px"}/>
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

<Divider border={"0.5px solid gray.600"} mt={"15px"} mb={"15px"}/>

<Menu>
    <MenuButton as={Button} bg={useColorModeValue('gray.100', 'gray.800')}
     fontSize={"xl"} mr={"230px"} 
     color={useColorModeValue('gray.900', 'gray.800')} w={"300px"} h={"60px"} ml={"20px"}>
     Category  <ChevronDownIcon ml={"160px"}/>
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

<Divider border={"0.5px solid gray.600"} mt={"30px"} mb={"15px"}/>


    <Image borderRadius={"10px"} src="https://th.bing.com/th/id/OIP.INQDJmWQigJ7Lvwv0OdfUgHaJQ?pid=ImgDet&w=200&h=250&c=7&dpr=2"/>
    {/* <Image  borderRadius={"10px"} src="https://th.bing.com/th/id/OIP.zMc3e0l5_6YgsBHq9k6J7QAAAA?w=193&h=256&c=7&r=0&o=5&dpr=2&pid=1.7"/> */}

    <br/>
    <Image borderRadius={"10px"} src="https://th.bing.com/th/id/OIP.tkv1lksbPQHzszJ8BGrGTAHaIB?pid=ImgDet&w=200&h=216&c=7&dpr=2"/>
     <br/>

     <Image borderRadius={"10px"} src="https://th.bing.com/th/id/OIP.kPf9nPipr09i1031wOD8kAHaLK?pid=ImgDet&w=200&h=300&c=7&dpr=2"/>


    </div>
  )
}
