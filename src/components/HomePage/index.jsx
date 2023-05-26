import React from 'react';
import { Container, SectionContainer, SkillSectionContainer, SectionTitle, SectionText, Banner, BannerContainer, BannerTitle, BannerSubtitle, PersonalCardContainer, PresentationTitle, PresentationText,  ProfileImage, ProfessionalTitle, PresentationContainer, ImageButton, ImageContainer, Image } from './styles';
import { MainContainer, SectionContainer2, PersonalCardContainer2, PresentationContainer2 } from './styles';
import bannerImg from '../../images/soft-banner.png';
import Presentation from './components/Presentation';
import myImage from './images/sam-photo1.jpg'
import travelportLogo from './images/travelport-logo.png';
import { homePageText } from '../../pageData/personalIntroduction';

const HomePage = () => {
  return (
    <>
    <Container>
      <BannerContainer>
        <Banner src={bannerImg} alt="Banner" />
        <BannerTitle>IPOP</BannerTitle>
        <BannerSubtitle>Sam Verstegen Poy</BannerSubtitle>
      </BannerContainer>

      <MainContainer>
        <SectionContainer2>
          <PersonalCardContainer2>
            <ProfileImage src={myImage} />
            <ProfessionalTitle>Desarrollador de Aplicaciones Multiplataforma</ProfessionalTitle>
          </PersonalCardContainer2>
          
          <PresentationContainer2>
            <PresentationTitle>Presentación</PresentationTitle>
            <PresentationText>{homePageText.introduction}</PresentationText>
          </PresentationContainer2>
        </SectionContainer2>
      </MainContainer>
    </Container>
    </>
  );
};

export default HomePage;
