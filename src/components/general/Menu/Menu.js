import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open} >
      <a href="/">
        <span aria-label="Home"></span>
        Home
      </a>
      <a href="/toa">
        <span aria-label="policies"></span>
        Policies
      </a>
      <a href="/about-me">
        <span aria-label="about me"></span>
        About Me
        </a>
      <a href="/preparation">
        <span aria-label="prep"></span>
        Prep & Aftercare
        </a>
      <a href="/services">
        <span aria-label="services"></span>
        Services
        </a>
      <a href="/appointments">
        <span aria-label="appointments"></span>
        Book an Appointment
        </a>
        <a href="https://www.instagram.com/dollfacepmu/?hl=en" target="_blank" rel="noopener noreferrer">
        <span aria-label="gallery"></span>
        Gallery
      </a>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;