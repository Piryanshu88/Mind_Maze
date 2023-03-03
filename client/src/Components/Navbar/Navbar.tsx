import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLogedIn, setIsLogedIn] = useState(true); // for profile picture

  return (
    <>
      <Box bgGradient='linear-gradient(120deg, #F6D365 0%, #FDA085 100%)' px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>

            {/*************************** Logo *******************************/}
            <Link to="/">Logo</Link>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Link to="/">Home</Link>
              <Link to="/">Leaderboard</Link>
              <Link to="/">High Score</Link>
            </HStack>
          </HStack>

          {/**************** Showion Avatar if Logedin **************/}
          <Flex alignItems={"center"}>
            {isLogedIn ? (
              
                <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                {/**************  Avatar Url  ************/}
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList>
                <Link to="#"><MenuItem>Profile</MenuItem></Link>
                <MenuDivider />
                <Link to="#"><MenuItem>Sign Out</MenuItem></Link>
              </MenuList>
            </Menu> 
              
            ) : (
              <>
                <Link to="#"><Button>Sign In</Button></Link>
                <Link to="#"><Button ml="5px">Register</Button></Link>
              </>
            )}
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Link to="/">Home</Link>
              <Link to="/">Leaderboard</Link>
              <Link to="/">High Score</Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

export { Navbar };
