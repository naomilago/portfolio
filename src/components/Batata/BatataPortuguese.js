import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiFillTwitterSquare } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const BatataPortuguese = () => (
  <Container>
    <Div1>
      <Link href='/'>
        <a style={{ display: 'flex', alignItems: 'center', color: 'white', marginBottom: '20px' }}>
          <DiCssdeck size='3rem' /> <Span>Naomi Lago</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='#projects'>
          <NavLink>Projetos</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#technologies'>
          <NavLink>Tecnologias</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#about'>
          <NavLink>Sobre mim</NavLink>
        </Link>
      </li>
      {/* <nav>
        <label for='touch'><NavLink><span className='batatinha'>Idioma</span></NavLink></label>
        <input type='checkbox' id='touch' />

        <ul class='slide'>
          <li>
            <Link href='/'>
              <NavLink style={{ fontSize: '16px' }}>English</NavLink>
            </Link>
          </li>
          <li>
            <Link href='/pt-br'>
              <NavLink style={{ fontSize: '16px' }}>Português</NavLink>
            </Link>
          </li>
        </ul>
      </nav> */}
    </Div2>
    <Div3>
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
    </Div3>
  </Container>
)

export default BatataPortuguese