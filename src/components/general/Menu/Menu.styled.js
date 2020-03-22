import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  z-index: 50;
  flex-direction: column;
  justify-content: center;
  background: white;
  height: 105%;
  text-align: left;
  width: 95%;
  font-family: 'Helvetica Light';
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease-in-out;
  
  
  @media (max-width: 1080px) {
    width: 100%;
  }

  a {
    font-size: 1.3rem;
    text-transform: uppercase;
    padding: 1rem 0;
    color: black;
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;