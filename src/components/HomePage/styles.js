import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;
  background: #F5FFFA;
  padding-bottom: 100px;
`;

export const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
`;

export const Banner = styled.img`
  width: 100%;
  height: 100%;
`;

export const BannerTitle = styled.h2`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 32px;
  color: #ffffff;
  text-align: center;
`;

export const BannerSubtitle = styled.h3`
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 22px;
  font-weight: normal;
  color: #ffffff;
  text-align: center;
`;

export const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5%;
`;

export const SkillSectionContainer = styled.div`
  width: 100%;
`;

export const SectionTitle = styled.h2`
  width: 100%;
  text-align: center;
`;

export const SectionText = styled.p`
  width: 70%;
  text-align: justify;
  margin-right: auto;
  margin-left: auto;
`;

export const PersonalCardContainer = styled.div`
  width: 20%;
  height: auto;
  margin-left: 15%;
  margin-top: 5%;
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 2%;
`;

export const ProfessionalTitle = styled.h3`
  margin-top: 10px;
  text-align: center;
  font-weight: normal;
`;

export const PresentationContainer = styled.div`
  width: 30%;
  margin-right: 10%;
  padding: 20px;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const ImageButton = styled.button`
  width: 200px;
  height: 150px;
  border-radius: 10px;
  margin: 0 10px;
  background-color: #e0e0e0;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #bdbdbd;
  }
`;

export const Image = styled.img`
  width: 70%;
  height: auto;
`;

export const PresentationTitle = styled.h3`
  margin: 0;
  font-size: 20px;
  font-weight: bold;
`;

export const PresentationText = styled.p`
  margin-top: 8px;
  font-size: 16px;
  line-height: 1.5;
  text-align: justify;
`;

// new one

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const SectionContainer2 = styled.div`
  width: 60%;
  heigth: 300px;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

export const PersonalCardContainer2 = styled.div`
  width: 40%;
`;

export const PresentationContainer2 = styled.div`
  width: 45%;
`;

