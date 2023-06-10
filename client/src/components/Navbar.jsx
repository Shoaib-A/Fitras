import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { GhostButton } from "react-hamburger-menus";
import "react-hamburger-menus/dist/style.css";
import { useMediaQuery } from '@material-ui/core';

import React, { useState } from "react";
import styled, { css } from "styled-components";

import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from '../assets/Logo.svg';

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: flex-start; // Updated from 'center'
  justify-content: space-between;
  ${mobile({ padding: "10px 10px" })}
`;

const StyledUl = styled.ul`
  font-family: 'Lato', sans-serif;
  ${({ isMobile }) => isMobile && css`
    max-height: 300px;
    overflow-y: auto;
  `}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const MenuIcon = styled.div`
  display: none;
  ${mobile({ display: "block", cursor: "pointer" })}
  svg {
    font-size: 28px;
  }
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  

`;

// Updated CSS styles for the logo image
const LogoImage = styled.img`
  width: 100%;
  max-width: 200px;
  height: auto;
  fill: blue;
  margin-top: -110px; /* Adjust the margin-top value as needed */
  position: relative;
  z-index: 1;
  transform: scale(1.2);

  @media screen and (max-width: 768px) {
    margin-top: -60px; /* Adjust the margin-top value for mobile screens if necessary */
  }
`;





const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const MenuClass = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const StyledLi = styled.li`
  padding: 10px;
  color: #333;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #f5f5f5;
  }
  & > a {
    color: #333;
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    position: relative;
    overflow: hidden;
    z-index: 1;
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -5px;
      width: 100%;
      height: 2px;
      background-color: #ff6f61;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s ease-in-out;
      z-index: -1;
    }
    &:hover::after {
      transform: scaleX(1);
    }
  }
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
 
  const isMobile = useMediaQuery('(max-width:600px)');

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <Container>
      <Wrapper>
        <Left>
          {isMobile && (
            <GhostButton
              styles={{
                floatButtonY: 40,
                floatButtonX: 10,
                navigationCard: {
                  backgroundColor: "#fff",
                  top: "50px",
                  width: '300px',
                  left: 0
                },
                navigationButton: {
                  borderRadius: "10px",
                  border: "none",
                  // In case you need static not fixed
                  position: "relative",
                  width: "100px",
                  height: "40px",
                  backgroundColor: "transparent",
                  zIndex: 10,
                  boxShadow: "none"
                },
                navigationIcon: {
                  zIndex: 10
                },
              }}
            >
              <StyledUl isMobile={isMobile}>
                <StyledLi>
                  <Link to="/"> Home </Link>
                </StyledLi>  
                <StyledLi>
                  <Link to="/products/Semiformal"> Semi Formal </Link>
                </StyledLi> 
                <StyledLi>
                  <Link to="/products/Formal"> Formal </Link>
                </StyledLi> 
                <StyledLi>
                  <Link to="/products/DesingerWear"> Designer Wear </Link>
                </StyledLi> 
                <StyledLi>
                  <Link to="/products/Casual"> Casual </Link>
                </StyledLi> 
                <StyledLi>
                  <Link to="/products/Western"> Western </Link>
                </StyledLi> 
                <StyledLi>
                  <Link to="/products/luxury"> Luxury </Link>
                </StyledLi> 
              </StyledUl>
            </GhostButton>
          )}
        </Left>

        <Center>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <LogoImage
              src={Logo}
              alt="Your logo"
            />
          </Link>
        </Center>

        <Right>
          <MenuIcon onClick={toggleMenu} />

          <Link to="/carts">
            <MenuClass>
              <Badge badgeContent={quantity} color="primary" overlap="rectangular">
                <ShoppingCartOutlined />
              </Badge>
            </MenuClass>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
