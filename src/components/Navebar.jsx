
import { Search2Icon} from '@chakra-ui/icons'
import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Text,
  Icons,
  Input,
  InputGroup,
  InputRightAddon,
  List,
  Divider,
 
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'


export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}  >
        <Flex h={16} alignItems={'center'} justifyContent={'space-evenly'} width={1000} margin={'auto'}>

          <Box> <img src="logo.svg"/> </Box>

          {/* ****************************Search Bar*************************************** */}
       <InputGroup>     
        <Input  width={400} placeholder= "try Sari,Kurta or Search by Product Code" type="text" /> 
        <InputRightAddon children={<Search2Icon/>} />
       </InputGroup>   
 
 
{/* 8******************************************************************************* */}

{/* *****************************Download*************************************** */}
          <Menu>
  <MenuButton as={Button} >
    Download App
  </MenuButton>
  <MenuList>
    <MenuItem>Download From</MenuItem>
    {/* <MenuItem>Create a Copy</MenuItem> */}
    <MenuItem><img width ="200px" src ="https://images.meesho.com/images/pow/playstore-icon-big.webp"/></MenuItem>
    <MenuItem><img width ="200px" src ="https://images.meesho.com/images/pow/appstore-icon-big.webp"/></MenuItem>
  </MenuList>
</Menu>
{/* 8******************************************************************************* */}
          <Box><Text>Become a Supplier</Text> </Box>

          <Flex alignItems={'center'}>
          
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Box><Text>Profile</Text></Box>

                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'md'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Hello User</p> 
                    
                  </Center>
                  <p>11110000000</p>

                  <br />
                  <MenuDivider />
                  
                  <MenuItem>My Orders</MenuItem>
                  <MenuItem> Logout</MenuItem>
                </MenuList>
                <Box><Text>Cart</Text> </Box>
              </Menu>
              
            </Stack> 
          </Flex>
        </Flex>
      </Box>


      {/* **************************************Drop down nave****************************** */}
     <Divider border={"1px solid pink"}/>
      <Box bg={useColorModeValue('gray.50', 'gray.800')} px={4} h={12}>
      


<Menu>
    <MenuButton as={Button} bg={0}>
     Women Ethnic
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

<Menu>
  <MenuButton as={Button} bg={0}>
   Women Western
  </MenuButton>
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>

<Menu>
  <MenuButton as={Button} bg={0}>
    Mens
  </MenuButton>
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>

<Menu>
  <MenuButton as={Button} bg={0}>
   Kids
  </MenuButton>
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>

<Menu>
  <MenuButton as={Button} bg={0}>
   Home & Kitchen
  </MenuButton>
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>

<Menu>
  <MenuButton as={Button} bg={0}>
    Beautiful & Health
  </MenuButton>
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>

<Menu>
  <MenuButton as={Button} bg={0}>
    Bag & Footwear Electronic
  </MenuButton>
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu> 

<Menu> 
  <MenuButton as={Button} bg={0}>
   Jewellery & Accessories
  </MenuButton>
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>

<Divider border={"1px solid red"}/>
      </Box>
      
    </>
  );
}

