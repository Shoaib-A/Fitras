import { useState } from "react";
import styled from "styled-components";
import { register} from "../redux/apiCalls";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://i.imgur.com/Ubi1yLT.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;



const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;
const Error = styled.span`
  color: red;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
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
      history.push('/');
    })
    .catch((error) => {
      console.log(error);
    });
};
   
  
    
  return (
    <Container>
    <Wrapper>
      <Title>CREATE AN ACCOUNT</Title>
      <Form >
        <Input placeholder="name" name="firstName" onChange={(e) => setfirstname(e.target.value)} />
        <Input placeholder="last name" name="lastName" onChange={(e) => setlastname(e.target.value)}/>
        <Input placeholder="username" name="username" onChange={(e) => setusername(e.target.value)} />
        <Input placeholder="email" name="email" onChange={(e) => setemail(e.target.value)} />
        <Input
          placeholder="password"
          name="password"
          type="password"
          onChange={(e) => setpassword(e.target.value)}
        />
        <Input
          placeholder="confirm password"
          name="confirmPassword"
          type="password"
          onChange={(e) => setconfirmpassword(e.target.value)}
        />
        <Agreement>
          By creating an account, I consent to the processing of my personal
          data in accordance with the <b>PRIVACY POLICY</b>
        </Agreement>
        <Button type="submit" onClick={handleClick} disabled={isFetching}>CREATE</Button>
        {error && <Error>Something went wrong...</Error>}
      </Form>
    </Wrapper>
  </Container>
  );
};

export default Register;