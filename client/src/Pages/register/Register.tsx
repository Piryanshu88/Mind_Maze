import react from "react";
import styles from "./Register.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [loading, setLoading] = useState(false);
  const [firstName, setFname] = useState("");
  const [lastName, setLname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    const payload = {
      firstName,
      lastName,
      password,
      email,
    };
    console.log(payload);
    
    try {
      setLoading(true);
      fetch(`https://lazy-tan-shrimp-tux.cyclic.app/user/register`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.success) {
            alert("Register");
            navigate("/login");
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

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <div className={styles.cover}>
        <h2 style={{ fontWeight: "bold", fontSize: "25px" }}>REGISTER</h2>
        <br />
        {/* <p className={styles.headingsOfInputs}>First Name</p> */}
        <input
          style={{ padding: "10px" }}
          type="text"
          placeholder="First Name"
          onChange={(e) => setFname(e.target.value)}
        />
        {/* <p className={styles.headingsOfInputs}>Last Name</p> */}
        <input
          style={{ padding: "10px" }}
          type="text"
          placeholder="Last Name"
          onChange={(e) => setLname(e.target.value)}
        />
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
        <button className={styles.buttonOlogin} onClick={handleRegister}>
          CREATE ACCOUNT
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
          AllREADY HAVE AN ACCOUNT ?
        </p>
        <br />
        <button className={styles.buttonOlogin} onClick={handleLogin}>
          LOGIN
        </button>
      </div>
    </>
  );
};

export default Register;