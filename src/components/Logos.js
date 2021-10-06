import React from 'react';
import styled, { css } from 'styled-components';
// IMAGES
import contentfulLogo from '../assets/images/logos/contentful.svg';
import gatsbyLogo from '../assets/images/logos/gatsby.svg';
import javascriptLogo from '../assets/images/logos/javascript.svg';
import nextLogo from '../assets/images/logos/next-js.svg';
import reactLogo from '../assets/images/logos/react.svg';
import styledLogo from '../assets/images/logos/styled.jpg';

export default function Logos({ showLogos }) {
  return (
    <LogoContainer>
      <Logo $show={showLogos} $moveX={'-200%'} $moveY={'-150%'}>
        <img src={javascriptLogo} alt="javascript logo" />
        <p>javascript</p>
      </Logo>
      <Logo $show={showLogos} $moveX={'-140%'} $moveY={'-240%'}>
        <img src={reactLogo} alt="react logo" />
        <p>react</p>
      </Logo>
      <Logo $show={showLogos} $moveX={'-50%'} $moveY={'-280%'}>
        <img src={styledLogo} alt="styled components logo" />
        <p>styled</p>
        <p>components</p>
      </Logo>
      <Logo $show={showLogos} $moveX={'70%'} $moveY={'-280%'}>
        <img src={nextLogo} alt="next JS logo" />
        <p>next.js</p>
      </Logo>
      <Logo $show={showLogos} $moveX={'160%'} $moveY={'-250%'}>
        <img src={gatsbyLogo} alt="gatsby logo" />
        <p>gatsby</p>
      </Logo>
      <Logo $show={showLogos} $moveX={'170%'} $moveY={'-150%'}>
        <img src={contentfulLogo} alt="contentful logo" />
        <p>contentful</p>
      </Logo>
    </LogoContainer>
  );
}

const LogoContainer = styled.div`
  position: absolute;
  top: 120px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  z-index: 10;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  width: 50px;
  transition: 200ms ease-in-out;
  
  ${(props) =>
    props.$show &&
    css`
        transform: translate(${props.$moveX}, ${props.$moveY});
        opacity: 1;
    `}
        
    img {
        max-height: 50px;
        margin-bottom: 0.5rem;
    }

    p {
        margin-bottom: 0;
        line-height: 0.75rem;
    }

`;
