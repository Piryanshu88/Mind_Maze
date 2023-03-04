import { Box, Button, Heading, Text, useToast } from "@chakra-ui/react";
import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import styles from "./Room.module.css";
import { FcCheckmark, FcHighPriority } from "react-icons/fc";
import { getUserById, updatedUser } from "../../Admin/Redux/action";
import { Payload } from "../../Admin/Redux/reducer";
interface options {
  opt1: string;
  check: boolean;
}
interface questions {
  _id?: string;
  questionName: string;
  category: string;
  level: string;
  options: options[];
  marks: number;
}
interface QuestionsPayload {
  data: questions[];
  status: string;
  userId?: string;
  totalCount?: number;
}

const Room = () => {
  const [page, setPage] = useState<number>(0);
  const [ques, setQues] = useState<any>([]);
  const [points, setpoints] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const toast = useToast();
  let { category } = useParams();

  const handleClick = (check: boolean) => {
    setLoading(true);

    if (check) {
      const val = points + 10;
      setpoints(val);
      console.log(points);
      updatedUser(localStorage.getItem("id"), { points: points }).then((re) => {
        console.log(re);
        toast({
          title: `correct answer,You get 10 points`,
          status: "success",
          isClosable: true,
          duration: 2000,
        });
      });
    } else {
      toast({
        title: `wrong answer`,
        status: "error",
        isClosable: true,
        duration: 2000,
      });
    }
    setTimeout(() => {
      setLoading(false);
      setPage(page + 1);
      getData(page);
    }, 3000);
  };

  // const getuser = async()=>{
  //   const response: AxiosResponse<any> = await axios()
  // }

  const getData = async (page: number = 0) => {
    const response: AxiosResponse<QuestionsPayload> = await axios(
      `https://lazy-tan-shrimp-tux.cyclic.app/questions?category=${category}&page=${page}`,
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    setQues(response.data);
  };
  console.log(ques);

  useEffect(() => {
    getData(page);
    getUserById(localStorage.getItem("id")).then((re: any) =>
      setpoints(re.data[0].points)
    );
  }, [page]);
  return (
    <>
      <Box className={styles.main}>
        <Box className={styles.mainbox}>
          <Box mt="10px" bg="yellow.200" w="5%" ml="95%" borderRadius={"10px"}>
            <Text textAlign={"center"} fontWeight="bold">
              {page + 1}/{ques.totalCount}
            </Text>
          </Box>
          <Box className={styles.question}>
            {loading ? (
              <img src="https://media1.giphy.com/media/J0Cw0qUYLssQvgNT3I/200w.webp?cid=ecf05e47n7abfv4z0unhkzmuposmygb41odmwumkuzvpgzcx&rid=200w.webp&ct=s" />
            ) : (
              ques.data?.map((el: any) => {
                return (
                  <>
                    <Box w="60%" m="auto">
                      <Text
                        fontSize={"25px"}
                        fontWeight="bold"
                        textAlign={"center"}
                      >
                        {el.questionName}
                      </Text>
                    </Box>
                    <Box className={styles.options}>
                      <Box onClick={() => handleClick(el.options[0].check)}>
                        <Text>A.{el.options[0].opt1} </Text>
                      </Box>

                      <Box onClick={() => handleClick(el.options[1].check)}>
                        <Text>B.{el.options[1].opt1} </Text>
                      </Box>

                      <Box onClick={() => handleClick(el.options[2].check)}>
                        <Text>C.{el.options[2].opt1} </Text>
                      </Box>

                      <Box onClick={() => handleClick(el.options[3].check)}>
                        <Text>D.{el.options[3].opt1} </Text>
                      </Box>
                    </Box>
                  </>
                );
              })
            )}
            <Box display={"flex"} justifyContent="space-around">
              <Button
                isDisabled={page === ques.totalCount - 1}
                fontSize={"20px"}
                fontWeight={"bold"}
                padding="20px"
                bg={"#ffc9a5"}
                _hover={{ bg: "blue.600", color: "white" }}
                onClick={() => setPage(page + 1)}
              >
                SKIP
              </Button>
              <Button
                isDisabled={page === ques.totalCount - 1}
                fontSize={"20px"}
                fontWeight={"bold"}
                padding="20px"
                bg={"#ffc9a5"}
                _hover={{ bg: "blue.600", color: "white" }}
                onClick={() => setPage(page + 1)}
              >
                END QUIZ
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Room;
