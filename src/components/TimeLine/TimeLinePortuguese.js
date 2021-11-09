import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineDataPortuguese } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineDataPortuguese.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  }

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));

      scroll(carouselRef.current, scrollLeft);
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

      setActiveItem(index);
    }
  }

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Section id='about'>
      <SectionDivider />
      <br />
      <SectionTitle>Sobre mim</SectionTitle>
      <SectionText style={{ textAlign: 'justify', maxWidth: '1040px' }}>
        <br />
        &nbsp;&nbsp;   Aos meus 15 anos eu iniciei meu curso técnico em Informática para Internet e isso me permitiu ver a tecnologia com outros olhares. Apesar das aulas difíceis, inicialmente, eu comecei a me aventurar pelas várias linhas de código (incluindo os bugs haha); comecei a explorar novos horizontes como as linguagens PHP, JavaScript, e Python. Ter essas visões e manter contato com essas áreas, mesmo que com projetos pequenos, me fez ver que eu realmente queria seguir uma carreira em Tecnologia da Informação (TI).<br />
        &nbsp;&nbsp; Com 17 anos eu iniciei meu curso superior em Defesa Cibernética onde, após conhecer o mundo do desenvolvimento web, encontrei minha real paixão: cibersegurança. O que eu espero do futuro é que eu consiga atingir meus objetivos em trabalhar fazendo o que eu realmente gosto, sendo quem eu realmente sou.<br />
        &nbsp;&nbsp;Estou sempre aberta a descobertas e explorações de novas tecnologias e isso me deixa bastante motivada 🙃
      </SectionText>
      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <>
          {TimeLineDataPortuguese.map((item, index) => (
            <CarouselMobileScrollNode key={index} final={index === TOTAL_CAROUSEL_COUNT - 1}>
              <CarouselItem index={index} id={`carousel__item-${index}`} active={activeItem} onClick={(e) => handleClick(e, index)}>
                <CarouselItemTitle>
                  {item.year}
                  <CarouselItemImg
                    width="208"
                    height="6"
                    viewBox="0 0 208 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                      fill="url(#paint0_linear)"
                      fill-opacity="0.33"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="-4.30412e-10"
                        y1="0.5"
                        x2="208"
                        y2="0.500295"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop
                          offset="0.79478"
                          stop-color="white"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </CarouselItemImg>
                </CarouselItemTitle>
                <CarouselItemText>
                  {item.text}
                </CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {TimeLineDataPortuguese.map((item, index) => (
          <CarouselButton key={index} index={index} active={activeItem} onClick={(e) => handleClick(e, index)} type='button'>
            <CarouselButtonDot active={activeItem} />
          </CarouselButton>
        ))}
      </CarouselButtons>
      <SectionDivider />
    </Section>
  );
};

export default Timeline;
