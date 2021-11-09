import Acomplishments from '../components/Acomplishments/AcomplishmentsPortuguese';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/HeroPortuguese';
import Projects from '../components/Projects/ProjectsPortuguese';
import Batata from '../components/Batata/BatataPortuguese'
import Technologies from '../components/Technologies/TechnologiesPortuguese';
import Timeline from '../components/TimeLine/TimeLinePortuguese';
import { Layout } from '../layout/LayoutPortuguese';
import { Section } from '../styles/GlobalComponents';

const Portuguese = () => {
  return (
    <Layout>
      <Batata/>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
    </Layout>
  );
};

export default Portuguese;