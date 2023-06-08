import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  position: relative;
  overflow: hidden;

  ${mobile({ height: "auto" })}
`;

const Arrow = styled.div`
  width: 40px;
  height: 40px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;

  ${(props) => props.direction === "left" && "left: 20px;"}
  ${(props) => props.direction === "right" && "right: 20px;"}

  &:hover {
    background-color: #e5e5e5;
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 0.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);

  ${mobile({ flexDirection: "column" })}
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};

  ${mobile({ height: "auto", flexDirection: "column" })}

  &:hover {
    transform: scale(1.02);
  }
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  
  transition: all 0.3s ease;

  &:hover {    
    transform: scale(1.01);
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;

  ${mobile({ padding: "20px" })}
`;

const Title = styled.h1`
  font-size: 70px;
  text-align: center;

  ${mobile({ fontSize: "40px" })}
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  text-align: center;

  ${mobile({ margin: "20px 0px", fontSize: "16px" })}
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;

  ${mobile({ fontSize: "16px" })}
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check initial window size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const interval = setInterval(() => {
        setSlideIndex((prevIndex) => (prevIndex < 1 ? prevIndex + 1 : 0));
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isMobile]);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 1));
    } else {
      setSlideIndex((prevIndex) => (prevIndex < 1 ? prevIndex + 1 : 0));
    }
  };

  const displayedSliderItems = sliderItems.slice(0, 2);

  return (
    <Container>
      {!isMobile && (
        <>
          <Arrow direction="left" onClick={() => handleClick("left")}>
            <ArrowLeftOutlined />
          </Arrow>
          <Arrow direction="right" onClick={() => handleClick("right")}>
            <ArrowRightOutlined />
          </Arrow>
        </>
      )}
      <Wrapper slideIndex={slideIndex}>
        {displayedSliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Slider;
