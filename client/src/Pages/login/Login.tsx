import react from "react";
import styles from "./Login.module.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

const Login = () => {
  const Navigate = useNavigate();
  const toast = useToast();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handellogin = () => {
    const payload = {
      email,
      password,
    };

    console.log(payload);

    if (email === "" || password === "") {
      toast({
        position: "top",
        variant: "top-accent",
        title: "Missing information",
        description: `Please enter all mandatory fields`,
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
    } else {
      try {
        setLoading(true);
        fetch(`https://lazy-tan-shrimp-tux.cyclic.app/user/login`, {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((res) => {
            console.log(res);
            localStorage.setItem("token", res.token);
            localStorage.setItem("isauth", "true");
            localStorage.setItem("id", res.data._id);
            localStorage.setItem("name", res.data.firstName);
            console.log(res.token);
          });

        toast({
          position: "top",
          variant: "top-accent",
          title: "login successful",
          description: `Welcome !!`,
          status: "success",
          duration: 5000,
          isClosable: true,
        });

        Navigate("/");
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
        toast({
          position: "top",
          variant: "top-accent",
          title: "Error",
          description: "Something went wrong please try again",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    }
  };

  return (
    <>
      <div className={styles.impcontainer}>
        <div className={styles.cover}>
          <h2 style={{ fontWeight: "bold", fontSize: "25px", color: "black" }}>
            LOGIN
          </h2>
          <br />
          {/* <p className={styles.headingsOfInputs}>Last Name</p> */}
          {/* <p className={styles.headingsOfInputs}>Your Email</p> */}
          <input
            style={{ padding: "10px" }}
            type="email"
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
          {/* <p className={styles.headingsOfInputs}>Your Password</p> */}
          <input
            style={{ padding: "10px" }}
            type="password"
            placeholder="Enter Your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button className={styles.buttonOlogin} onClick={handellogin}>
            LOGIN
          </button>
          <p style={{ fontWeight: "bold", fontSize: "15px", color: "black" }}>
            FORGOT PASSWORD ?
          </p>
          <br />
          <p className={styles.disc} style={{ fontSize: "15px" }}>
            By creating an account, you agree to our{" "}
            <span style={{ textDecoration: "underline" }}>
              STATUS Terms & Conditions
            </span>
            ,
            <span style={{ textDecoration: "underline" }}> Privacy Policy</span>
            , and{" "}
            <span style={{ textDecoration: "underline" }}> Terms of Use</span>.
          </p>
          <br />
          <p style={{ fontWeight: "bold", fontSize: "15px", color: "black" }}>
            DON'T HAVE AN ACCOUNT ?
          </p>
          <br />
          <button className={styles.buttonOlogin}>REGISTER</button>
        </div>
      </div>
    </>
  );
};

export default Login;
