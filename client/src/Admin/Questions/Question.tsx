import {
  Button,
  FormControl,
  Input,
  InputGroup,
  Select,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  getQuestionData,
  getQuestionDataById,
  options,
  questions,
  QuestionsPayload,
  updateQuestion,
} from "../Redux/action";
import styles from "./Question.module.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
export const Question = () => {
  const [questions, setQuestions] = useState<questions[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [is, setis] = useState<string | undefined>("");

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
  const [q, setq] = useState<questions>({
    questionName: "",
    category: "",
    level: "",
    options: [opt1, opt2, opt3, copt1],
    marks: 10,
  });
  const handleClick = (id: string | undefined) => {
    setis(id);
    getQuestionDataById(id).then((re) => {
      setopt1(re.data[0].options[0]);
      setopt2(re.data[0].options[1]);
      setopt3(re.data[0].options[2]);
      setCopt1(re.data[0].options[3]);
      setq({
        questionName: re.data[0].questionName,
        category: re.data[0].category,
        level: re.data[0].level,
        options: re.data[0].options,
        marks: re.data[0].marks,
      });
    });
    onOpen();
    console.log(q);
  };

  const updatedClick = () => {
    console.log({ ...q, options: [opt1, opt2, opt3, copt1] });
    updateQuestion(is, { ...q, options: [opt1, opt2, opt3, copt1] }).then(
      (re) => {
        toast({
          title: re.message,
          status: "success",
          isClosable: true,
          duration: 2000,
        });
      }
    );
    getQuestionData()
      .then((re: QuestionsPayload) => setQuestions(re?.data))
      .catch((err) => {
        console.log(err.message);
      });
    onClose();
  };
  useEffect(() => {
    getQuestionData()
      .then((re: QuestionsPayload) => setQuestions(re?.data))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className={styles.questions_box}>
      {questions.map((el, i) => {
        return (
          <div
            key={i}
            className={styles.questions_box_1}
            onClick={() => handleClick(el._id)}
          >
            <Text>{el.questionName}</Text>
          </div>
        );
      })}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          borderRadius={"20px"}
          marginTop="30px"
          background={"linear-gradient(120deg, #f6d365 0%, #fda085 100%)"}
        >
          <ModalHeader>Update Question</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <Input
                onChange={(e) => setq({ ...q, questionName: e.target.value })}
                type="text"
                variant={"flushed"}
                placeholder="Question here"
                marginBottom={"20px"}
                value={q.questionName}
              />
              <Select
                onChange={(e) => setq({ ...q, category: e.target.value })}
                marginBottom={"20px"}
                placeholder="Select Category"
                variant={"flushed"}
                value={q.category}
                color="gray.500"
              >
                <option value="anime">Anime</option>
                <option value="education">Education</option>
                <option value="gk">General knowledge</option>
              </Select>
              <Select
                onChange={(e) => setq({ ...q, level: e.target.value })}
                value={q.level}
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
                  value={opt1.opt1}
                  marginBottom={"20px"}
                />
                <Input
                  onChange={(e) => setopt2({ ...opt2, opt1: e.target.value })}
                  type="text"
                  variant={"flushed"}
                  value={opt2.opt1}
                  placeholder="Options here"
                  marginBottom={"20px"}
                />
                <Input
                  onChange={(e) => setopt3({ ...opt3, opt1: e.target.value })}
                  type="text"
                  value={opt3.opt1}
                  variant={"flushed"}
                  placeholder="Options here"
                  marginBottom={"20px"}
                />
              </InputGroup>
              <Input
                type="text"
                value={copt1.opt1}
                variant={"flushed"}
                onChange={(e) => setCopt1({ ...copt1, opt1: e.target.value })}
                placeholder="Correct Option"
                marginBottom={"20px"}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="yellow" mr={3} onClick={onClose} color="#fff">
              Close
            </Button>
            <Button variant="ghost" onClick={updatedClick} colorScheme="orange">
              Secondary Action
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
