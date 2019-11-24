import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Wrapper } from './styles';

const NavbarLinks = ({ desktop }) => (
  <Wrapper desktop={desktop}>
    <AnchorLink href="#about">about</AnchorLink>
    <AnchorLink href="#projects">projects</AnchorLink>
    <AnchorLink href="#contact">contact</AnchorLink>
  </Wrapper>
);

export default NavbarLinks;
