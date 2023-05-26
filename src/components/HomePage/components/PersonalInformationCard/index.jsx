import React from 'react';
import {
  CardContainer,
  Image,
  InfoContainer,
  Name,
  Cycle,
  Email
} from './styles';

const PersonalInformationCard = ({name, surname, studies, email, photo}) => {
  const fullName = name + ' ' + surname  
  return (
    <CardContainer>
      <Image src='https://media.licdn.com/dms/image/D4D03AQHSdobxRGLhEQ/profile-displayphoto-shrink_800_800/0/1679650593137?e=2147483647&v=beta&t=F8dprQ3m8aQ1A1Aj_fdBPhB005SeuKQfUnA3N_TgOXI' />
      <InfoContainer>
        <Name>{fullName}</Name>
        <Cycle>{studies}</Cycle>
        <Email>{email}</Email>
      </InfoContainer>
    </CardContainer>
  );
};

export default PersonalInformationCard;
