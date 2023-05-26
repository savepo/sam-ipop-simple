import React from 'react';
import { ProfessionalProjectionContainer, Section, SectionTitle, SectionContent, Container, UnstyledLink } from './styles';
import { professionalProjectionPageText } from '../../pageData/personalIntroduction';

const ProfessionalProjection = () => {
  return (
    <ProfessionalProjectionContainer>
      <Container>
        <Section>
          <SectionTitle><UnstyledLink href="https://sites.google.com/bemen3.cat/memoria-dual-sam-verstegen-poy/introducci%C3%B3n">MEMORIA DUAL</UnstyledLink></SectionTitle>
          <SectionContent>Una memoria dual es un documento que recopila y sintetiza la experiencia y aprendizajes adquiridos durante un período de formación dual. En ella, se encuentra una descripción detallada de las tareas realizadas, los conocimientos adquiridos y la relación con el ciclo formativo.
En el caso particular de mi paso por Travelport, esta memoria dual refleja mi participación en proyectos relacionados con el desarrollo de aplicaciones web, el uso de tecnologías como JavaScript, HTML y CSS, y la interacción con herramientas y frameworks específicos de la empresa.</SectionContent>
          <SectionContent>Puedes acceder a mi memoria dual haciendo click <UnstyledLink href="https://sites.google.com/bemen3.cat/memoria-dual-sam-verstegen-poy/introducci%C3%B3n">AQUÍ</UnstyledLink>.</SectionContent>
        </Section>
      </Container>
    </ProfessionalProjectionContainer>
  );
};

export default ProfessionalProjection;
