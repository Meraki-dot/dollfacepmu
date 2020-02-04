import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import { Link } from 'react-router-dom';

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open} >
      <Link to="/">
        <span aria-label="Home"></span>
        Home
      </Link>
      <Link to="/toa">
        <span aria-label="policies"></span>
        Policies
      </Link>
      <Link to="/about-me">
        <span aria-label="about me"></span>
        About Me
        </Link>
      <Link to="/preparation">
        <span aria-label="prep"></span>
        Prep & Aftercare
        </Link>
      <Link to="/services">
        <span aria-label="services"></span>
        Services
        </Link>
      <Link to="/appointments">
        <span aria-label="appointments"></span>
        Book an Appointment
        </Link>
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