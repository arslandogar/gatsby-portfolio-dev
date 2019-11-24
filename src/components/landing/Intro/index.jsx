import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => (
  <Wrapper>
    <Header />
    <IntroWrapper as={Container}>
      <Details>
        <h1>Arslan Dogar</h1>
        <h4>fullstack JavaScript developer</h4>
        <Button as={AnchorLink} href="#contact">
          Get in touch
        </Button>
      </Details>
      <Thumbnail>
        <img src={dev} alt="I’m Arslan and I’m a fullstack javascript developer & Devops engineer!" />
      </Thumbnail>
    </IntroWrapper>
  </Wrapper>
);
