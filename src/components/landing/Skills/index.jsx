import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="I’m Arslan and I’m a Backend & Devops engineer!" />
      </Thumbnail>
      <Details>
        <h1>Hi There!</h1>
        <p>
          I’m a Full Stack JavaScript Developer currently playing around ReactJS ecosystem. I would love to hear about
          your project and big idea.
        </p>
        <Button as={AnchorLink} href="#contact">
          Get in touch
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);
