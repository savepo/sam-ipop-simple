import React from 'react';
import { VideoContainer, Video, PageContainer, Title, CurriculumImage } from './styles';
import cvImg from './images/cv2.png'

const AboutMePage = () => {
  return (
    <PageContainer>
        {/* <Title>Videocurrículum</Title>
        <VideoContainer>
            <Video src={testVideo} controls autoPlay></Video>
        </VideoContainer> */}
        <Title>Mi curriculum</Title>
        <CurriculumImage src={cvImg} alt="Currículum" />
    </PageContainer>
  );
};

export default AboutMePage;
