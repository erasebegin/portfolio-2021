import React from "react";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function PortfolioCard({ data, setModalContent, buttonColor }) {
  const { title, description, image, repoUrl, demoUrl, modal } = data || {};

  return (
    <StyledCard>
      <a href={demoUrl} rel="noopener noreferrer" target="_blank">
        <Card.Img variant="top" src={image} />
      </a>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </Card.Body>
      <Card.Footer className="text-center">
        <a href={demoUrl} rel="noopener noreferrer" target="_blank">
          <StyledButton $buttonColor={buttonColor}>Demo</StyledButton>
        </a>
        {repoUrl && (
          <a href={repoUrl} rel="noopener noreferrer" target="_blank">
            <StyledButton $buttonColor={buttonColor}>Repo</StyledButton>
          </a>
        )}
        {modal && (
          <StyledButton
            $buttonColor={buttonColor}
            onClick={() => setModalContent({ list: modal, image })}
          >
            Info
          </StyledButton>
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
`;

const StyledButton = styled(Button)`
  margin-right: 0.3125rem;
  background: ${(props) => props.$buttonColor};
  border: ${(props) => props.$buttonColor};
  font-weight: bold;

  @media (max-width: 600px) {
    margin-right: 0.5rem;
  }

  &:hover {
    background: ${(props) => props.$buttonColor};
    filter: saturate(1.5);
    color: black !important;
  }

  &:focus,
  &:active {
    outline: none !important;
    background: ${(props) => props.$buttonColor};
    color: black !important;
    box-shadow: none;
  }
`;
