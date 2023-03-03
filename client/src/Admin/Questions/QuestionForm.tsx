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
  const [options, setoptions] = useState();
  const [opt1, setopt1] = useState({
    opt: "",
    checked: false,
  });
  const [questions, setQuestion] = useState({
    questionName: "",
    category: "",
    level: "",
    options: options,
    marks: 0,
  });
  const handleClick = () => {};

  return (
    <div>
      <FormControl onSubmit={handleClick}>
        <Input
          type="text"
          variant={"flushed"}
          placeholder="Question here"
          marginBottom={"20px"}
          value={questions.questionName}
        />
        <Select
          marginBottom={"20px"}
          placeholder="Select Category"
          variant={"flushed"}
          value={questions.category}
          color="gray.500"
        >
          <option value="anime">Anime</option>
          <option value="education">Education</option>
          <option value="gk">General knowledge</option>
        </Select>
        <Select
          value={questions.level}
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
          type="number"
          value={questions.marks}
          variant={"flushed"}
          placeholder="Points"
          marginBottom={"20px"}
        />
        <Button colorScheme="orange" width={"100%"} type="submit">
          Submit
        </Button>
      </FormControl>
    </div>
  );
};
