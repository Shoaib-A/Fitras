import styled from "styled-components";
import { useState, useEffect } from "react";


const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;
`;

const Announcement = () => {
  const [announcements, setAnnouncements] = useState([
    "Super Deal! Free Shipping on Orders",
    "Have a question? Give us a call at 123-456-7890",

  ]);
  const [currentAnnouncementIndex, setCurrentAnnouncementIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentAnnouncementIndex((prevIndex) =>
        prevIndex === announcements.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(intervalId);
  }, [announcements.length]);

  return (
    <Container>{announcements[currentAnnouncementIndex]}</Container>
  );
};

export default Announcement;
