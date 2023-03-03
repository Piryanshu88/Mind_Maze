import { Box, Button, Heading, Text } from '@chakra-ui/react';
import axios,{AxiosResponse} from 'axios';
import{ useState,useEffect } from 'react'
import styles from "./Room.module.css";

const Room = () => {
  const [text,setText] = useState<object>({});
  const [ques,setQues] = useState<AxiosResponse | null>(null);
  let val1:string = "dema";
  let check1:boolean = true;
  let val2:string = "gama";
  let val3:string = "theta";
  let val4:string = "etha";
  const getData = async()=>{
    const data = await axios.get("https://lazy-tan-shrimp-tux.cyclic.app/questions")
    setQues(data);
  }
  // console.log(text);
  // console.log(ques);
  
  useEffect(()=>{
    getData();
  },[])
  return (
    <>
    <Box className={styles.main}>
        <Box className={styles.mainbox}>
            <Box className={styles.question}>
                <Box bg="yellow.200" w="5%" ml="95%" borderRadius={"10px"}><Text textAlign={"center"} fontWeight="bold">1/10</Text></Box>
                <Box>
                <Heading textAlign={"center"}>Hi</Heading>
                </Box>
                <Box className={styles.options}>
                  <Box onClick={()=>setText({val1,check1})}>
                  <Text >A.</Text>
                  </Box>
                  <Box onClick={()=>setText({val2,check1})}>
                  <Text >B.</Text>
                  </Box>
                  <Box onClick={()=>setText({val3,check1})}>
                  <Text >C.</Text>
                  </Box>
                  <Box onClick={()=>setText({val4,check1})}>
                  <Text >D.</Text>
                  </Box>
                </Box>
                <Box display={"flex"} justifyContent="center">
                <Button fontSize={"20px"} fontWeight={"bold"} padding="20px" bg={"#ffc9a5"} _hover={{bg:"blue.600",color:"white"}}>NEXT</Button>
                </Box>
            </Box>
        </Box>
    </Box>
    </>
  )
}

export default Room