import react from "react";
import styles from "./Login.module.css";
const Login = () => {
  return (
    <>
      <div className={styles.cover}>
        <h2 style={{ fontWeight: "bold", fontSize: "25px" }}>
        LOGIN 
        </h2>
        <br />
    
        {/* <p className={styles.headingsOfInputs}>Last Name</p> */}
    
        {/* <p className={styles.headingsOfInputs}>Your Email</p> */}
        <input
          style={{ padding: "10px" }}
          type="email"
          placeholder="Enter Your Email"
        />{" "}
        {/* <p className={styles.headingsOfInputs}>Your Password</p> */}
        <input
          style={{ padding: "10px" }}
          type="password"
          placeholder="Enter Your password"
        />
        <br />
        <button
          className={styles.buttonOlogin}
    
        >
          LOGIN
        </button>
        <br />
        <p  className={styles.disc}  style={{ fontSize: "15px" }}>
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
        <button
          className={styles.buttonOlogin}
        
        >
          REGISTER
        </button>
      </div>
    </>
  );
};

export default Login;
