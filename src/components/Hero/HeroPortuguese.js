import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center style={{ textAlign: 'left' }}>
        Bem-vindo(a) <br />
        ao meu Portfólio!
      </SectionTitle>
      <SectionText style={{ textAlign: 'justify' }}>
        Olá, eu sou a Naomi Lago! <br />
        Estudo desenvolvimento web desde 201 e estou sempre em busca de melhorias.
        Meus hobbies em tecnologias também incluem: Cibersegurança, Computação em Nuvem etc.
      </SectionText>
      <Button onClick={() => window.open('https://naomilago.netlify.com', '_blank')}>Saiba mais</Button>
    </LeftSection>
  </Section>
);

export default Hero;