import React from "react";
import { TimelineContainer, EventContainer } from "./styles";
import Event from "./components/Event";

const Timeline = ({ events }) => {
  return (
    <TimelineContainer>
      {events.map((event, index) => (
        <EventContainer key={index}>
          <Event image={event} />
        </EventContainer>
      ))}
    </TimelineContainer>
  );
};

export default Timeline;