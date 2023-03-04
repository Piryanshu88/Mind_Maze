import { Button, Text, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  getQuestionData,
  getQuestionDataById,
  questions,
  QuestionsPayload,
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
  const [q, setq] = useState<questions>({
    questionName: "",
    category: "",
    level: "",
    options: [],
    marks: 10,
  });
  const handleClick = (id: string | undefined) => {
    getQuestionDataById(id).then((re) =>
      setq({
        questionName: re.data[0].questionName,
        category: re.data[0].category,
        level: re.data[0].level,
        options: re.data[0].options,
        marks: re.data[0].marks,
      })
    );
    onOpen();
    console.log(q);
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
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{q.questionName}</Text>
            <Text>{q.marks}</Text>
            <Text>{q.category}</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
