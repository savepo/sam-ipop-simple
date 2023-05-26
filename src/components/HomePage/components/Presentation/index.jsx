import React from 'react';
import { PresentationContainer, Title, Text } from './styles';
import { homePageText } from '../../../../pageData/personalIntroduction';

const Presentation = () => {
  return (
    <PresentationContainer>
      <Title>Presentción</Title>
      <Text>{homePageText.introduction}</Text>
    </PresentationContainer>
  );
};

export default Presentation;
