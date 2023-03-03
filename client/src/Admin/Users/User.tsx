import { IconButton, Skeleton, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataUser, useDataSuc } from "../Redux/action";
import { Payload, State, users } from "../Redux/reducer";
import styles from "./User.module.css";
import { RiUser3Line } from "react-icons/ri";
import { DeleteIcon } from "@chakra-ui/icons";
import axios from "axios";
interface Store {
  adminReducer: State;
}
export const User = () => {
  const dispatch = useDispatch();
  const [userdata, setData] = useState<users[]>([]);
  const handleClick = (id: string) => {
    return axios
      .delete(`https://lazy-tan-shrimp-tux.cyclic.app/user/delete/${id}`)
      .then(() =>
        getDataUser().then((re: Payload) =>
          setData(re.data.sort((a, b) => b.points - a.points))
        )
      );
  };
  useEffect(() => {
    getDataUser().then((re: Payload) =>
      setData(re.data.sort((a, b) => b.points - a.points))
    );
  }, []);
  return (
    <div className={styles.user_box}>
      <div className={styles.user_box_row}>
        <div className={styles.user_box_headings}>
          <Text>Rank</Text>
        </div>
        <div className={styles.user_box_headings}>
          <Text>FirstName</Text>
        </div>
        <div className={styles.user_box_headings}>
          <Text>LastName</Text>
        </div>
        <div className={styles.user_box_headings}>
          <Text>Email</Text>
        </div>
        <div className={styles.user_box_headings}>
          <Text>Total Score</Text>
        </div>
        <div className={styles.user_box_headings}>
          <Text>Delete</Text>
        </div>
      </div>
      {userdata?.map((el, i) => {
        return (
          <div key={i} className={styles.user_box_row}>
            <div className={styles.user_box_text}>{i + 1}</div>
            <div className={styles.user_box_text}>
              <Text>{el.firstName}</Text>
            </div>
            <div className={styles.user_box_text}>
              <Text>{el.lastName}</Text>
            </div>
            <div className={styles.user_box_text}>
              <Text>{el.email}</Text>
            </div>
            <div className={styles.user_box_text}>
              <Text>{el.points} pts. </Text>
            </div>
            <div>
              <IconButton
                onClick={() => handleClick(el._id)}
                variant="outline"
                colorScheme="red"
                color={"#FF0080"}
                border="none"
                _hover={{ color: "#fff" }}
                aria-label="Send email"
                icon={<DeleteIcon />}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
