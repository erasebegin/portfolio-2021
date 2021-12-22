import React from 'react';
import styled, { css } from 'styled-components';
import useIsMobile from '../hooks/useIsMobile';
// IMAGES
// import contentfulLogo from '../assets/images/logos/contentful.svg';
// import gatsbyLogo from '../assets/images/logos/gatsby.svg';
// import javascriptLogo from '../assets/images/logos/javascript.svg';
// import nextLogo from '../assets/images/logos/next-js.svg';
// import reactLogo from '../assets/images/logos/react.svg';
// import graphqlLogo from '../assets/images/logos/graphql.svg';

export default function Logos({ showLogos }) {
  const isMobile = useIsMobile();

  return (
    <LogoContainer>
      <Logo
        $show={showLogos}
        $moveX={isMobile ? '-10%' : '-200%'}
        $moveY={isMobile ? '-140%' : '-150%'}
      >
        <img src='./images/logos/javascript.svg' alt="javascript logo" />
        <p>javascript</p>
      </Logo>
      <Logo
        $show={showLogos}
        $moveX={isMobile ? '-60%' : '-150%'}
        $moveY={isMobile ? '-280%' : '-250%'}
      >
        <img src='./images/logos/react.svg' alt="react logo" />
        <p>react</p>
      </Logo>
      <Logo
        $show={showLogos}
        $moveX={isMobile ? '0%' : '-80%'}
        $moveY={isMobile ? '-250%' : '-300%'}
      >
        <img src='./images/logos/graphql.svg' alt="graphql logo" />
        <p>graphql</p>
      </Logo>
      <Logo $show={showLogos} $moveX={isMobile?'50%':'0%'} $moveY={isMobile ? '-150%':'-300%'}>
        <img src='./images/logos/gatsby.svg' alt="gatsby logo" />
        <p>gatsby</p>
      </Logo>
      <Logo $show={showLogos} $moveX={isMobile?'50%':'95%'} $moveY={isMobile?'-300%':'-280%'}>
        <img src='./images/logos/next-js.svg' alt="next JS logo" />
        <p>next.js</p>
      </Logo>
      <Logo
        $show={showLogos}
        $moveX={isMobile ? '20%' : '150%'}
        $moveY={isMobile ? '-120%' : '-190%'}
      >
        <img src='./images/logos/contentful.svg' alt="contentful logo" />
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
}
`;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50px;
  pointer-events: none;
  transition: 200ms ease-in-out;
  opacity: 0;

  ${(props) =>
    props.$show &&
    css`
      transform: translate(${props.$moveX}, ${props.$moveY});
      opacity: 1;
    `}

  img {
    max-height: 50px;
    margin-bottom: 0.5rem;

    @media(max-width:600px){
      max-height: 40px;
    }
  }

  p {
    margin-bottom: 0;
    line-height: 0.75rem;
  }
`;
