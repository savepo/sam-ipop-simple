import React from "react";
import { EventContainer, EventImage, EventLine } from "./styles";
import htmlImg from '../../images/html.png';

const Event = ({ image }) => {
  return (
    <EventContainer>
      <EventLine />
      <EventImage src={htmlImg} alt="Event" />
    </EventContainer>
  );
};

export default Event;