
import { userRequest } from "../requestMethods";
import styled from "styled-components";
import { useSelector } from 'react-redux';
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const PayButton = ({cartItems}) => {
  const user = useSelector((state) => state.user.CurrentUser);
  const handleCheckout = async () => {
    alert("please enter the dummy credit card information as 4242-4242-4242 and CVC as 123");
   await userRequest.post("/stripe/create-checkout-session",{
        cartItems,
        userId:user
    }).then((res) => {
        if(res.data.url){
            window.location.href = res.data.url
        }
    }).catch((err) => console.log(err.message));
  };
  
  return (
    <>
      <Button onClick={() => handleCheckout()}>Check out</Button>
    </>
  );
};

export default PayButton;