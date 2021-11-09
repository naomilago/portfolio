import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 26, text: 'Projetos Open Source'},
  { number: 104, text: 'Estrelas no Github', },
  { number: 111, text: 'Seguidores no Github', },
  { number: '6.9k', text: 'Seguidores no LinkedIn', },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Conquistas</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
