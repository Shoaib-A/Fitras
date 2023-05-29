import { useState } from "react";
import styles from "./Register.module.css";
import logo1 from "./register.svg";
import styled from "styled-components";
import { register} from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const strengthLabels = ["weak", "medium", "strong"];

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;
const Error = styled.span`
  color: red;
`;

export const Signup = () => {
  const [strength, setStrength] = useState("");
  const [firstName , setfirstname] = useState("");
  const [lastName, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [username, setusername] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const history = useHistory();
  const handleClick = (e) => {
    e.preventDefault();
    register(dispatch, { username, password , confirmpassword,email,firstName,lastName})
      .then(() => {
        // If sign up was successful, redirect to home page
        history.push("/");
      });
  };

  const getStrength = (password) => {
    let strengthIndicator = -1;

    let upper = false,
      lower = false,
      numbers = false;

    for (let index = 0; index < password.length; index++) {
      let char = password.charCodeAt(index);
      if (!upper && char >= 65 && char <= 90) {
        upper = true;
        strengthIndicator++;
      }

      if (!numbers && char >= 48 && char <= 57) {
        numbers = true;
        strengthIndicator++;
      }

      if (!lower && char >= 97 && char <= 122) {
        lower = true;
        strengthIndicator++;
      }
    }

    setStrength(strengthLabels[strengthIndicator] ?? "");
  };

  const handleChange = (event) => getStrength(event.target.value);

  return (
    <div className={styles["login-card"]}>
      <img src={logo1}  alt="logo" />
      <h2>Sign Up</h2>
      <form className={styles['login-form']}>
        <div className={styles.username}>
        <input
         name="firstName"
        spellCheck="false"
        className={styles.control}
        onChange={(e) => setfirstname(e.target.value)}
        placeholder="First Name"
    />
     <input
         name="lastName"
        spellCheck="false"
        className={styles.control}
        onChange={(e) => setlastname(e.target.value)}
        placeholder="Last Name"
    />
     <input
         name="userName"
        spellCheck="false"
        className={styles.control}
        onChange={(e) => setusername(e.target.value)}
        placeholder="Username"
    />
        <input
         autoComplete="new-email"
        spellCheck="false"
        className={styles.control}
        type="email"
        placeholder="Email"
        onChange={(e) => setemail(e.target.value)}
    />

          <div id="spinner" className={styles.spinner}></div>
        </div>
        <input
  name="password"
  spellCheck="false"
  className={styles.control}
  type="password"
  placeholder="Password"
  onChange={(e) => {
    setpassword(e.target.value);
    handleChange(e);
  }}
/>

         <input
          name="confirmPassword"
          spellCheck="false"
          className={styles.control}
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => setconfirmpassword(e.target.value)}
        />

          <div className={`${styles.bars} ${styles[strength]}`}>
          <div></div>
        </div>

        <div className={styles.strength}>{strength && <>{strength} password</>}</div>
        <Agreement>
          By creating an account, I consent to the processing of my personal
          data in accordance with the <b>PRIVACY POLICY</b>
        </Agreement>
        <button className={styles.control} type="submit" onClick={handleClick} disabled={isFetching}>
          JOIN NOW
        </button>
        {error && <Error>Something went wrong...</Error>}
      </form>
    </div>
  );
};
export default Signup;