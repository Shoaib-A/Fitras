import styled from "styled-components";
import { useState, useEffect } from "react";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 300;
  padding: 10px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Announcement = () => {
  const [announcements, setAnnouncements] = useState([
    "Super Deal!",
    "Have a question? Give us a message at +92310-5288517",
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

  return <Container>{announcements[currentAnnouncementIndex]}</Container>;
};

export default Announcement;
