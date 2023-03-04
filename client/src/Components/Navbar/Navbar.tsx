import { useEffect, useState } from "react";
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
import logo from "../../assets/Picsart_23-03-04_10-38-49-759.png";
import styles from "./Navbar.module.css";

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
            <Link to="/" className={styles.navbarlogo}>
              <img src={logo} />
            </Link>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
              fontSize={"20px"}
              fontWeight={600}
            >
              <Link to="/">Home</Link>
              <Link to="/leaderboard">Leaderboard</Link>
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
                  onClick={() => {
                    localStorage.clear();
                    window.location.reload();
                  }}
                >
                  {/**************  Avatar Url  ************/}
                  {/* <Avatar
                    size={"sm"}
                    src={
                      "https://github.com/shubhamkr2/UploadImages/blob/main/avatardefault_92824.png?raw=true"
                    }
                  /> */}
                  {localStorage.getItem("name")}
                </MenuButton>
              </Menu>
            ) : (
              <>
                <Link to="/login">
                  <button className={styles.button9}>Login</button>
                </Link>
                <Link to="/register">
                  <button className={styles.button9}>Register</button>
                </Link>{" "}
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
