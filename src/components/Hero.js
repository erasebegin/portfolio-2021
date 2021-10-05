import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import styled, { css } from 'styled-components';
import { HiMail, HiCode } from 'react-icons/hi';
import { Link } from 'react-scroll';

import headshot from '../assets/images/headshot3.jpg';

export default function Hero() {
  return (
    <div>
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <HeroTop>
              <ImageContainer>
                <StyledButton $left>
                  <HiCode size="2rem" />
                  <p>My skills</p>
                </StyledButton>
                <Image src={headshot} alt="headshot" />
                <Link to="contact">
                  <StyledButton $right>
                    <HiMail size="2rem" />
                    <p>Say hi</p>
                  </StyledButton>
                </Link>
              </ImageContainer>
              <h2>Chris Haupt's</h2>
              <h1>Portfolio</h1>
              <h5>
                A collection of some of my favourite projects created over the
                years using primarily <b>React</b>.
              </h5>
            </HeroTop>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const HeroTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;

  h1 {
    font-family: ${(props) => props.theme.fonts.title};
    font-weight: 600;
    font-size: 8rem;
  }

  h2 {
    font-family: ${(props) => props.theme.fonts.title};
    font-weight: 600;
    font-size: 4rem;
    margin-bottom: 0;
    line-height: 1rem;
  }

  h5 {
    text-align: center;
    font-weight: 200;
    max-width: 300px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  height: 400px;
  width: 400px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 3rem;
  z-index: 3;
`;

const StyledButton = styled(Button)`
  height: 100px;
  background: ${(props) => props.theme.colors.green};
  border: none;
  white-space: nowrap;

  /* Left Button */
  ${(props) =>
    props.$left &&
    css`
      border-top-left-radius: 2rem;
      border-bottom-left-radius: 2rem;
      padding-right: 3rem;
      padding-left: 2rem;
      margin-right: -2rem;
    `};

  /* Right Button */
  ${(props) =>
    props.$right &&
    css`
      border-top-right-radius: 2rem;
      border-bottom-right-radius: 2rem;
      padding-left: 4rem;
      padding-right: 2rem;
      margin-left: -2rem;
    `};

  &:hover {
    background: ${(props) => props.theme.colors.blue};
  }

  &:focus {
    background: ${(props) => props.theme.colors.blue};
  }

  &:active {
    outline: red;
    border: red;
  }

  svg {
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 0;
    font-family: ${(props) => props.theme.fonts.main};
  }
`;
