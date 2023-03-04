import { Box, Button, Heading, Text } from '@chakra-ui/react';
import axios,{AxiosResponse} from 'axios';
import{ useState,useEffect } from 'react'
import { useParams } from 'react-router';
import styles from "./Room.module.css";
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
  const [page,setPage] = useState<number>(0);
  const [ques,setQues] = useState<any>([]);
  let {category} = useParams()
  const getData = async(page: number = 0)=>{
    const response: AxiosResponse<QuestionsPayload> = await axios(
      `https://lazy-tan-shrimp-tux.cyclic.app/questions?category=${category}&page=${page}`,
      {
        headers: {
          Authorization:
            localStorage.getItem("token"),
        },
      }
    );
    setQues(response.data);
  }
  console.log(ques);
  
  useEffect(()=>{
    getData(page);
  },[page])
  return (
    <>
    <Box className={styles.main}>
        <Box className={styles.mainbox}>
            <Box className={styles.question}>
                <Box bg="yellow.200" w="5%" ml="95%" borderRadius={"10px"}><Text textAlign={"center"} fontWeight="bold">{page+1}/{ques.totalCount}</Text></Box>
                {ques.data?.map((el:any)=>{
                  return (
                    <>
                    <Box w="60%" m="auto">
                    <Text fontSize={"25px"} fontWeight="bold" textAlign={"center"}>{el.questionName}</Text>
                    </Box>
                    <Box className={styles.options}>
                  <Box>
                    <Text >A.{el.options[0].opt1}</Text>
                    </Box>
                    <Box>
                    <Text >B.{el.options[1].opt1}</Text>
                    </Box>
                    <Box>
                    <Text >C.{el.options[2].opt1}</Text>
                    </Box>
                    <Box>
                    <Text >D.{el.options[3].opt1}</Text>
                    </Box>
                  </Box>
                    </>
                  )
                })}
                <Box display={"flex"} justifyContent="center">
                <Button isDisabled={page===ques.totalCount-1} fontSize={"20px"} fontWeight={"bold"} padding="20px" bg={"#ffc9a5"} _hover={{bg:"blue.600",color:"white"}} onClick={()=>setPage(page+1)}>NEXT</Button>
                </Box>
            </Box>
        </Box>
    </Box>
    </>
  )
}

export default Room