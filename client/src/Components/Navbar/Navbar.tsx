import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../Navbar/Navbar.module.css"
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
  const [isLogedIn, setIsLogedIn] = useState(
    localStorage.getItem("isauth") == "true" ? true : false
  ); // for profile picture

  return (
    <>
      <div
        className={styles.container}
        // bgGradient="linear-gradient(120deg, #F6D365 0%, #FDA085 100%)"
        // px={4}
      >
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
              fontSize={"20px"}
              fontWeight={600}
            >
              <Link to="/">Home</Link>
              <Link to="/leaderboard">Leaderboard</Link>
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
                      "https://github.com/shubhamkr2/UploadImages/blob/main/avatardefault_92824.png?raw=true"
                    }
                  />
                </MenuButton>
                <MenuList>
                  <Link to="#">
                    <MenuItem>Profile</MenuItem>
                  </Link>
                  <MenuDivider />
                  <Link to="#">
                    <MenuItem>Sign Out</MenuItem>
                  </Link>
                </MenuList>
              </Menu>
            ) : (
              <>
                <Link to="/login">
                  <Button>Sign In</Button>
                </Link>
                <Link to="/register">
                  <Button ml="5px">Register</Button>
                </Link>
              </>
            )}
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Link to="/">Home</Link>
              <Link to="/leaderboard">Leaderboard</Link>
              <Link to="/">High Score</Link>
            </Stack>
          </Box>
        ) : null}
      </div>
    </>
  );
}

export { Navbar };
