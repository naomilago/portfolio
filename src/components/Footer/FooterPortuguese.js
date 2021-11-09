import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare  } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Ligações</LinkTitle>
          <LinkItem href='tel:+55 (19) 93618-0842'>+55 (19) 93618-0842</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:contato.naomilago@gmail.com'>contato.naomilago@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan style={{ marginLeft: '-1vh' }}>Feito com 💜 por Naomi Lago.</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons target='_blank' href='https://linkedin.com/in/naomilago'>
            <AiFillLinkedin size='3rem' />
          </SocialIcons>
          <SocialIcons target='_blank' href='https://twitter.com/naomilago/'>
            <AiFillTwitterSquare size='3rem' />
          </SocialIcons>
          <SocialIcons target='_blank' href='https://github.com/naomilago'>
            <AiFillGithub size='3rem' />
          </SocialIcons>
          <SocialIcons target='_blank' href='https://www.instagram.com/naomillago/'>
            <AiFillInstagram size='3rem' />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
