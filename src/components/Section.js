import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import Card from './Card';
import ImageModal from './ImageModal';
import Divider from './Divider';

export default function Section({
  title,
  cards,
  color,
  columns,
  dividerColor,
  dividerAlt
}) {
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
          </Col>
        </Row>
        <Row>
          {cards.map((cardData) => (
            <Col md={columns ? columns : 6}>
              <Card
                data={cardData}
                buttonColor={colors[color]}
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
`;

const Title = styled.h2`
  color: white;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  font-family: ${props => props.theme.fonts.title};
  font-weight: 600;
  font-size: 3rem;
  text-align: center;
`;
