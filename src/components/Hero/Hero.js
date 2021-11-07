import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center style={{ textAlign: 'left' }}>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText style={{ textAlign: 'justify' }}>
        Hey, my name is Naomi Lago! <br />
        I study web development since 2018 and I'm always looking for new ways to improve.
        My tech hobbies also includes: Cybersecurity, Cloud Computing and more.
      </SectionText>
      <Button onClick={() => window.open('https://naomilago.netlify.com', '_blank')}>Know me better</Button>
    </LeftSection>
  </Section>
);

export default Hero;