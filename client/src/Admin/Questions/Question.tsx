import { Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getQuestionData, questions, QuestionsPayload } from "../Redux/action";
import styles from "./Question.module.css";
export const Question = () => {
  const [questions, setQuestions] = useState<questions[]>([]);
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
          <div key={i} className={styles.questions_box_1}>
            <Text>{el.questionName}</Text>
          </div>
        );
      })}
    </div>
  );
};
