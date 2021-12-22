import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Card from "./Card";
import ImageModal from "./ImageModal";
import Divider from "./Divider";

export default function Section({ sectionData }) {
  const {
    cards,
    title,
    subtitle,
    color,
    columns,
    dividerColor,
    buttonColor,
    dividerAlt,
  } = sectionData || {};

  const [modalContent, setModalContent] = useState({});
  const colors = useTheme().colors;

  return (
    <StyledSection $background={colors[color]}>
      <ImageModal modalContent={modalContent} />
      <Divider color={colors[dividerColor]} alt={dividerAlt} />
      <Container>
        <Row>
          <Col>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
          </Col>
        </Row>
        <Row>
          {cards.map((cardData, index) => (
            <Col md={columns ? columns : 4} key={index}>
              <Card
                data={cardData}
                buttonColor={colors[buttonColor]}
                setModalContent={setModalContent}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </StyledSection>
  );
}

const StyledSection = styled.div`
  background: ${(props) => props.$background};
  padding: 2rem;
  padding-top: 10rem;
  position: relative;

  @media (max-width: 600px) {
    padding-top: 3rem;
  }
`;

const Title = styled.h2`
  color: ${(props) => props.theme.colors.blackGreen};
  margin-bottom: 0.5rem;
  font-size: 2.5rem;
  font-family: ${(props) => props.theme.fonts.title};
  font-weight: 600;
  font-size: 3rem;
  text-align: center;
`;

const Subtitle = styled.h3`
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;
