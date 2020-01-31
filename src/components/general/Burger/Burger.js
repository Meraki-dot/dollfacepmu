import React from 'react';
import { bool, func } from 'prop-types';
import { StyledBurger } from './Burger.styled';

const Burger = ({open, isOpen}) => {
  return (
    <StyledBurger open={open} onClick={() => isOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;