import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  Select,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { addQuestion, addQuestions, options, questions } from "../Redux/action";

export const QuestionForm = () => {
  const toast = useToast();

  const [opt1, setopt1] = useState<options>({
    opt1: "",
    check: false,
  });
  const [opt3, setopt3] = useState<options>({
    opt1: "",
    check: false,
  });
  const [opt2, setopt2] = useState<options>({
    opt1: "",
    check: false,
  });
  const [copt1, setCopt1] = useState<options>({
    opt1: "",
    check: true,
  });
  const [options, setoptions] = useState<options[]>([opt1, opt2, opt3, copt1]);
  const [questions, setQuestion] = useState<questions>({
    questionName: "",
    category: "",
    level: "",
    options: [opt1, opt2, opt3, copt1],
    marks: 10,
  });
  const handleClick = () => {
    //setoptions([opt1, opt2, opt3, copt1]);
    if (
      questions.category &&
      questions.questionName &&
      questions.level &&
      questions.options &&
      questions.marks &&
      opt1.opt1 &&
      opt2.opt1 &&
      opt3.opt1 &&
      copt1.opt1
    ) {
      setTimeout(() => {
        console.log({ ...questions, options: [opt1, opt2, opt3, copt1] });
        addQuestions({ ...questions, options: [opt1, opt2, opt3, copt1] }).then(
          (re: addQuestion) =>
            toast({
              title: re?.data,
              status: "success",
              isClosable: true,
              duration: 3000,
            })
        );
      }, 2000);
    } else {
      toast({
        title: `Please fill all the credentials`,
        status: "error",
        isClosable: true,
        duration: 3000,
      });
    }
  };

  return (
    <div>
      <FormControl>
        <Input
          onChange={(e) =>
            setQuestion({ ...questions, questionName: e.target.value })
          }
          type="text"
          variant={"flushed"}
          placeholder="Question here"
          marginBottom={"20px"}
          value={questions.questionName}
        />
        <Select
          onChange={(e) =>
            setQuestion({ ...questions, category: e.target.value })
          }
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
          onChange={(e) => setQuestion({ ...questions, level: e.target.value })}
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
            onChange={(e) => setopt1({ ...opt1, opt1: e.target.value })}
            type="text"
            variant={"flushed"}
            placeholder="Options here"
            marginBottom={"20px"}
          />
          <Input
            onChange={(e) => setopt2({ ...opt2, opt1: e.target.value })}
            type="text"
            variant={"flushed"}
            placeholder="Options here"
            marginBottom={"20px"}
          />
          <Input
            onChange={(e) => setopt3({ ...opt3, opt1: e.target.value })}
            type="text"
            variant={"flushed"}
            placeholder="Options here"
            marginBottom={"20px"}
          />
        </InputGroup>
        <Input
          type="text"
          variant={"flushed"}
          onChange={(e) => setCopt1({ ...copt1, opt1: e.target.value })}
          placeholder="Correct Option"
          marginBottom={"20px"}
        />

        <Button colorScheme="orange" width={"100%"} onClick={handleClick}>
          Submit
        </Button>
      </FormControl>
    </div>
  );
};
