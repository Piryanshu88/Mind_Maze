import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  Select,
} from "@chakra-ui/react";
import React, { useState } from "react";

export const QuestionForm = () => {
  const [questions, setQuestion] = useState({
    questionName: "",
    category: "",
    level: "",
    options: "",
    marks: 0,
  });
  const [options, setoptions] = useState([]);
  return (
    <div>
      <FormControl>
        <Input
          type="text"
          variant={"flushed"}
          placeholder="Question here"
          marginBottom={"20px"}
        />
        <Select
          marginBottom={"20px"}
          placeholder="Select Category"
          variant={"flushed"}
          color="gray.500"
        >
          <option value="anime">Anime</option>
          <option value="education">Education</option>
          <option value="gk">General knowledge</option>
        </Select>
        <Select
          marginBottom={"20px"}
          placeholder="Select level"
          variant={"flushed"}
          color="gray.500"
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </Select>
        <InputGroup>
          <Input
            type="text"
            variant={"flushed"}
            placeholder="Options here"
            marginBottom={"20px"}
          />
          <Input
            type="text"
            variant={"flushed"}
            placeholder="Options here"
            marginBottom={"20px"}
          />
          <Input
            type="text"
            variant={"flushed"}
            placeholder="Options here"
            marginBottom={"20px"}
          />
        </InputGroup>
        <Input
          type="text"
          variant={"flushed"}
          placeholder="Correct Option"
          marginBottom={"20px"}
        />
        <Input
          type="text"
          variant={"flushed"}
          placeholder="Points"
          marginBottom={"20px"}
        />
        <Button colorScheme="orange" width={"100%"}>
          Submit
        </Button>
      </FormControl>
    </div>
  );
};
