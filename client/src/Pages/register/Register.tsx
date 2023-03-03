import react from "react";
import styles from "./Register.module.css";
import { useState } from "react";
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'


const Register = () => {
  const Navigate = useNavigate()
  const toast = useToast()

  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const handelregister = () => {
    const payload = {

      firstName,
      lastName,
      email,
      password,

    }

    console.log(payload)

    if (firstName === "" || lastName === "" || email === "" || password === "") {
      toast({
        position: 'top',
        variant: 'top-accent',
        title: 'Missing information',
        description: `Please enter all mandatory fields`,
        status: 'warning',
        duration: 5000,
        isClosable: true
      })
    } else {
      try {
        setLoading(true)
        fetch(`https://lazy-tan-shrimp-tux.cyclic.app/user/register`, {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-type": "application/json"
          }
        }).then((res) => res.json())
        toast({
          position: 'top',
          variant: 'top-accent',
          title: 'Register successful',
          description: `Your account has been created ${firstName}`,
          status: 'success',
          duration: 5000,
          isClosable: true
        })
        Navigate('/login')
        setLoading(false)

      } catch (err) {
        console.log(err)
        setLoading(false)
        toast({
          position: 'top',
          variant: 'top-accent',
          title: 'Error',
          description: 'Something went wrong please try again',
          status: 'error',
          duration: 5000,
          isClosable: true
        })
      }
    }

  }
  const loginfunc=()=>{
    Navigate('/login')

  }
  return (
    <>
        <div className={styles.impcontainer}>

      <div className={styles.cover}>
        <h2 style={{ fontWeight: "bold", fontSize: "25px" }}>REGISTER</h2>
        <br />
        {/* <p className={styles.headingsOfInputs}>First Name</p> */}
        <input
          style={{ padding: "10px" }}
          type="text"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        {/* <p className={styles.headingsOfInputs}>Last Name</p> */}
        <input
          style={{ padding: "10px" }}
          type="text"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
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
        <button className={styles.buttonOlogin} onClick={handelregister}>
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
        <button className={styles.buttonOlogin} onClick={loginfunc}>
          LOGIN
        </button>
      </div>
      </div>
    </>
  );
};

export default Register;