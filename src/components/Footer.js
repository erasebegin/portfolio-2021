import React from 'react';
import styled, { useTheme } from 'styled-components';
import {
  GrReactjs,
  GrLinkedin,
  GrGithub,
  GrMail,
  GrInstagram
} from 'react-icons/gr';
import Divider from './Divider';

export default function Footer() {
  const colors = useTheme().colors;

  return (
    <StyledFooter>
      <Divider color={colors.blue} invert />
      <ContactLinkContainer>
        <ContactLink
          href="https://www.linkedin.com/in/chris-haupt/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GrLinkedin size="2rem" />
        </ContactLink>
        <ContactLink
          href="https://www.github.com/erasebegin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GrGithub size="2rem" />
        </ContactLink>
        <ContactLink
          href="https://www.instagram.com/christhaupt/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GrInstagram size="2rem" />
        </ContactLink>
        <ContactLink
          href="mailto:chris.james.haupt@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GrMail size="2rem" />
        </ContactLink>
      </ContactLinkContainer>
      <FooterTextContainer>
        <p>Created using <b>React</b></p>
        <GrReactjs size="2rem" />
        <p>
          Check out the source over on{' '}
          <a
            href="https://github.com/erasebegin/portfolio-2021"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </p>
      </FooterTextContainer>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  background: ${(props) => props.theme.colors.blue};
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 3rem 0;
`;

const ContactLink = styled.a`
  color: ${(props) => props.theme.colors.white};
  margin-left: 1rem;

  &:hover {
    color: ${props => props.theme.colors.yellow};
  }

  &:first-child {
    margin-left: 0;
  }
`;

const ContactLinkContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const FooterTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  color: white;

  p {
    margin-bottom: 0;
  }

  svg {
    margin: 0 0.5rem;
    color: ${props => props.theme.colors.white};
  }

  a {
    color: ${props => props.theme.colors.yellow};
  }

  @media(max-width: 700px) {
    flex-direction: column;

    svg {
      display: none;
    }
  }
`;
