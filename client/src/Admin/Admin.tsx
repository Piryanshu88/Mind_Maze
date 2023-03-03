import React from "react";
import { About } from "./About";
import styles from "./Admin.module.css";
import { Question } from "./Questions/Question";
import { QuestionForm } from "./Questions/QuestionForm";
import { User } from "./Users/User";
export const Admin = () => {
  const [activeTab, setActiveTab] = React.useState("Properties");
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
  return (
    <div className={styles.admin_box}>
      <div className={styles.admin_box_left}> </div>
    </div>
  );
};
