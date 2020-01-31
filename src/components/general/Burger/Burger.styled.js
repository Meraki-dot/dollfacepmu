import styled from 'styled-components';

export const StyledBurger = styled.button`
  position: fixed;
  top: 2em;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 3rem;
  height: 1.3rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  
  &:focus {
    outline: none;
  }
  
  div {
    width: 2rem;
    height: 0.08rem;
    background: black;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }

  @media screen and (min-width: 921px) {
    display: none
  }
`;