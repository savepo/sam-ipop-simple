import React from "react";
import { CardContainer, CardDate, CardDescription, CardTitle } from "./styles";

const Card = ({ title, date, description }) => {
    return (
      <CardContainer>
        <CardTitle>{title}</CardTitle>
        <CardDate>{date}</CardDate>
        <CardDescription>{description}</CardDescription>
      </CardContainer>
    );
  };
  
  export default Card;