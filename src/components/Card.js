import React from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { GrGithub } from 'react-icons/gr';

export default function PortfolioCard({ data, setModalContent, buttonColor }) {

  const { title, description, image, repoUrl, demoUrl, modal } = data || {};

  return (
    <StyledCard $buttonColor={buttonColor}>
      <a href={demoUrl} rel="noopener noreferrer" target="_blank">
        <Card.Img variant="top" src={image} />
      </a>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </Card.Body>
      <Card.Footer className="text-center">
        <a href={demoUrl} rel="noopener noreferrer" target="_blank">
          <Button>Demo</Button>
        </a>
        {repoUrl && (
          <a href={repoUrl} rel="noopener noreferrer" target="_blank">
            <Button>Repo</Button>
          </a>
        )}
        {modal && (
          <Button onClick={() => setModalContent({ list: modal, image })}>
            Info
          </Button>
        )}
      </Card.Footer>
    </StyledCard>
  );
}

const StyledCard = styled(Card)`
  background: white;
  margin-bottom: 2rem;
  min-height: 27rem;

  img {
    height: 12.5rem;
    object-fit: cover;
  }

  button {
    margin-right: 0.3125rem;
    background: ${(props) => props.$buttonColor};
    border: ${(props) => props.$buttonColor};
    font-weight: bold;

    @media (max-width: 600px) {
      margin-right: 0.5rem;
    }

    &:hover {
      background: ${(props) => props.$buttonColor};
      opacity: 0.9;
    }
  }
`;
