import styled from "@emotion/styled";

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%; 
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Image = styled.img`
  width: 30%; 
  height: auto;
  border-radius: 50%;
  object-fit: cover;
  margin: 10px;
`;

export const InfoContainer = styled.div`
  flex: 1;
  margin-left: 30px;
`;

export const Name = styled.h2`
  margin: 0;
  font-size: 18px;
`;

export const Cycle = styled.p`
  margin: 8px 0;
  font-size: 16px;
`;

export const Profession = styled.p`
  margin: 8px 0;
  font-size: 16px;
`;

export const Email = styled.p`
  margin: 8px 0;
  font-size: 16px;
  color: #888;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 20px;
  font-weight: bold;
`;

export const Text = styled.p`
  margin-top: 8px;
  font-size: 16px;
  line-height: 1.5;
`;

