import { Flex, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { About } from "./About";
import styles from "./Admin.module.css";
import { Question } from "./Questions/Question";
import { QuestionForm } from "./Questions/QuestionForm";
import { User } from "./Users/User";
import { FiUsers } from "react-icons/fi";
import { BiBook, BiBookAdd } from "react-icons/bi";

import "aos/dist/aos.css";
import { AiOutlineInfoCircle } from "react-icons/ai";
export const Admin = () => {
  const [activeTab, setActiveTab] = React.useState("users");
  const getCorrectScreen = (tab: string) => {
    switch (tab) {
      case "users":
        return <User />;
      case "questions":
        return <Question />;
      case "addquestions":
        return <QuestionForm />;
      case "about":
        return <About />;
    }
  };
  //   useEffect(() => {
  //     AOS.init({ delay: 500 });
  //   }, []);
  return (
    <div className={styles.admin_box}>
      <div className={styles.admin_box_left}>
        <Flex
          onClick={() => setActiveTab("users")}
          boxShadow={
            activeTab == "users"
              ? "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
              : "rgba(0, 0, 0, 0.1) 0px 4px 12px"
          }
        >
          <FiUsers />
          <Text>Users</Text>
        </Flex>
        <Flex
          onClick={() => setActiveTab("questions")}
          boxShadow={
            activeTab == "questions"
              ? "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
              : "rgba(0, 0, 0, 0.1) 0px 4px 12px"
          }
        >
          <BiBook />
          <Text>All Questions</Text>
        </Flex>
        <Flex
          onClick={() => setActiveTab("addquestions")}
          boxShadow={
            activeTab == "addquestions"
              ? "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
              : "rgba(0, 0, 0, 0.1) 0px 4px 12px"
          }
        >
          <BiBookAdd />
          <Text>Add Question</Text>
        </Flex>
        <Flex
          onClick={() => setActiveTab("about")}
          boxShadow={
            activeTab == "about"
              ? "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
              : "rgba(0, 0, 0, 0.1) 0px 4px 12px"
          }
        >
          <AiOutlineInfoCircle />
          <Text>About</Text>
        </Flex>
      </div>
      <div className={styles.admin_box_right}>
        {getCorrectScreen(activeTab)}
      </div>
    </div>
  );
};
