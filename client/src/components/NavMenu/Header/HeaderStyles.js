import styled from "styled-components";
import {Link} from "react-router-dom";
import BurgerBackground from "../../../assets/Background/BurgerBackground.svg";

export const StyledNavMenu = styled.div`
  display: flex;
  align-items: center;
  max-width: 1400px;
  width: 72.91666666666667%;
  height: 14.81481481481481%;
  min-height: 110px;
  max-height: 160px;
  position: absolute;
  z-index: 20;

  @media (max-width: 1200px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const StyledWrapperNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 75px;

  @media (max-width: 1200px) {
    display: grid;
    position: absolute;
    z-index: 100;
    top: 0;
    left: ${props => (props.open ? '0' : '-100vw')};
    padding: 48px 0 0 30px;
    box-sizing: border-box;
    flex-direction: column;
    max-width: 100%;
    height: 100vh;
    transition: ease-in-out 250ms;
    grid-template-rows: repeat(6, 50px) 20%; 
    grid-template-columns: 1fr; 
    
    background-image: url(${BurgerBackground});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;

    & > *:nth-child(3) {
      grid-row: 1;
    }
  }
`;

export const StyledLogo = styled.div`
  width: 100px;
  height: 70px;

  &:hover {
    svg path {
      fill: ${props => props.$hoverColor};
    }
  }

  @media (max-width: 1200px) {
    width: fit-content;
    height: 21.25%;
  }
`;

export const StyledLink = styled(Link)`
  width: fit-content;
  height: 21.25%;
  color: ${props => (props.$active ? 'var(--sunset-orange)' : props.$darkColor ? 'var(--dark-night)' : 'var(--pure-white)')};
  font-family: var(--font-family);
  font-weight: bold;
  font-size: 24px;
  text-decoration: none;
  transition: ease-in-out 250ms;

  &:hover {
    color: var(--sunset-orange);
  }

  @media (max-width: 1200px) {
    color: ${props => (props.$active ? 'var(--sunset-orange)' : 'var(--pure-white)')};
  }
`;

export const BurgerButton = styled.button`
  display: none;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 110;
  top: 20px;
  right: 40px;
  width: 28px;
  height: 28px;
  background-color: rgba(0, 0, 0, 0);
  border: none;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 1200px) {
    display: flex;
  }
`;

export const BurgerInside = styled.div`
  width: 28px;
  height: 4px;
  background-color: ${props => (props.open ? 'var(--lavender-sky)' : 'var(--pure-white)')};
  position: relative;
  border-radius: 2px;
  transition: all 0.3s ease-in-out;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    width: 28px;
    height: 4px;
    border-radius: 2px;
    background-color: ${props => (props.open ? 'var(--lavender-sky)' : 'var(--pure-white)')};
    transition: all 0.3s ease-in-out;
  }

  &::before {
    top: ${props => (props.open ? '0' : '-8px')};
    transform: ${props => (props.open ? 'rotate(-90deg)' : 'none')};
  }

  &::after {
    top: ${props => (props.open ? '0' : '8px')};
    transform: ${props => (props.open ? 'rotate(-90deg)' : 'none')};
  }

  transform: ${props => (props.open ? 'rotate(45deg)' : 'none')};
`;

export const ContactsInBurger = styled.div`
  display: none;
  width: 56.25%;
  max-width: 240px;
  height: fit-content;
  justify-content: space-between;
  
  @media(max-width: 1200px) {
    display: flex;
  }
`;