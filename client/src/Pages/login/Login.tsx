import react from "react";
import styles from "./Login.module.css";
import { useState } from "react";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handlelogin = () => {
    const payload = {
      email,
      password,
    };
    console.log(payload);

    try {
      fetch(`https://lazy-tan-shrimp-tux.cyclic.app/user/login`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.success) {
            alert("Login successful");
            console.log(res);
          } else {
            alert(res.message);
          }
        });
    } catch (err) {
      console.log(err);
      alert("Something Wrong");
    }
  };

  return (
    <>
      <div className={styles.cover}>
        <h2 style={{ fontWeight: "bold", fontSize: "25px" }}>LOGIN</h2>
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
        <button className={styles.buttonOlogin} onClick={handlelogin}>
          LOGIN
        </button>
        <br />
        <p className={styles.disc} style={{ fontSize: "15px" }}>
          By creating an account, you agree to our{" "}
          <span style={{ textDecoration: "underline" }}>
            STATUS Terms & Conditions
          </span>
          ,<span style={{ textDecoration: "underline" }}> Privacy Policy</span>,
          and <span style={{ textDecoration: "underline" }}> Terms of Use</span>
          .
        </p>
        <br />
        <p style={{ fontWeight: "bold", fontSize: "15px" }}>
          DON'T HAVE AN ACCOUNT ?
        </p>
        <br />
        <button className={styles.buttonOlogin}>REGISTER</button>
      </div>
    </>
  );
};

export default Login;
