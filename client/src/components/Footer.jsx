import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Room,
    WhatsApp,
  } from "@material-ui/icons";
  import styled from "styled-components";
  import { mobile } from "../responsive";
  
  const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.h1``;
  
  const Desc = styled.p`
    margin: 20px 0px;
    font-size:18px;
    font-weight:500;
  `;
  
  const SocialContainer = styled.div`
    display: flex;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    &:hover {
      background-color: lightgray;
      cursor: pointer;
    }
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
  `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    
  `;
  
  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 20px;
    font-size: 16px;
    transition: color 0.2s ease-in-out;
    &:hover {
      cursor: pointer;
      color: #f38181;
    }
  `;
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
  
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;
  
  const Payment = styled.img`
      width: 50%;
  `;
  
  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>Fitras.</Logo>
          <Desc>
          There are many variations of stylish fashion statements available at Fitras Clothing,
           each crafted with care and attention to detail. Our collection embodies the perfect blend of comfort
            and elegance, ensuring you always look and feel your best. Explore our curated selection
             today and discover the epitome of fashionable attire.
          </Desc>
          <SocialContainer>
          <a href="https://www.facebook.com/fitrasbysaimaarman?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
            <SocialIcon color="3B5999">
      <Facebook />
        </SocialIcon>
      </a>
            
            
      <a href="https://www.instagram.com/fitrasbysaimaarman?igshid=OGQ5ZDc2ODk2ZA" target="_blank" rel="noopener noreferrer">
    <SocialIcon color="E4405F">
      <Instagram />
    </SocialIcon>
  </a>
            
           
            <a href="https://wa.me/+923105288517" target="_blank" rel="noopener noreferrer">
         <SocialIcon color="E60023">
          <WhatsApp />
         </SocialIcon>
  </a>
           
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{marginRight:"10px"}}/> Islamabad,Pakistan
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"10px"}  } /> +923105288517
          </ContactItem>
          <ContactItem>
            <MailOutline style={{marginRight:"10px"}} />FitrasClothing@gmail.com
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
    );
  };
  
  export default Footer;