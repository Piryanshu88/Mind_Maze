import { Avatar } from "@chakra-ui/avatar";
import { Box, Heading, Text } from "@chakra-ui/layout";
import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import styles from "./Leaderboard.module.css";

export interface users {
  firstName: string;
  lastName: string;
  points: number;
  email: string;
  password: string;
}
interface Payload {
  data: users[];
  status: string;
}

const Leaderboard = () => {
  const [ques, setQues] = useState<users[]>([]);
  const getData = async () => {
    const response: AxiosResponse<any> = await axios.get(
      "https://lazy-tan-shrimp-tux.cyclic.app/user/all-users"
    );
    setQues(response.data.data.sort((a: any, b: any) => b.points - a.points));
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Box className={styles.main}>
        <Box className={styles.mainbox}>
          <Box className={styles.question}>
            <Box>
              <Heading
                textAlign={"center"}
                mt="20px"
                color={"whiteAlpha.900"}
                textDecoration="underline"
              >
                LEADERSHIP BOARD
              </Heading>
            </Box>
            <Box className={styles.options}>
              {ques?.map((el: any) => {
                return (
                  <Box bg="#ffffff" w="100%" p={4} color="black">
                    <Box display={"flex"} alignItems={"center"} w="100%">
                      <Avatar src="https://bit.ly/3kkJrly" />
                      <Text fontSize="20px" ml="10px">
                        {el.firstName + " " + el.lastName}
                      </Text>
                    </Box>
                    <Box w="100%">
                      <Text textAlign={"center"} fontSize="20px">
                        {el.email}
                      </Text>
                    </Box>
                    <Box w="100%">
                      <Text
                        textAlign={"end"}
                        fontSize="20px"
                        fontWeight={"bold"}
                        marginRight="10px"
                      >
                        {el.points}
                      </Text>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Leaderboard;
