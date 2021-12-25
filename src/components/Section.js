import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { IoMdArrowDropright } from "react-icons/io";
import { Button } from "react-bootstrap";
import Card from "./Card";
import ImageModal from "./ImageModal";
import Divider from "./Divider";
import TechIcon from "./TechIcon";

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
    sectionInfo,
  } = sectionData || {};

  const [modalContent, setModalContent] = useState({});
  const [showInfo, setShowInfo] = useState(false);
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
            <SectionInfo>
              <SectionInfoBody showInfo={showInfo}>
                <h4>{sectionInfo?.duration}</h4>
                <p>{sectionInfo?.description}</p>
                <TechIcons>
                  {sectionInfo?.tech.map((type) => {
                    return <TechIcon type={type} key={type} />;
                  })}
                </TechIcons>
              </SectionInfoBody>
              <BorderButton
                background={colors[buttonColor]}
                onClick={() => setShowInfo(!showInfo)}
                showInfo={showInfo}
              >
                More info <IoMdArrowDropright size="1.5rem"/>
              </BorderButton>
            </SectionInfo>
          </Col>
        </Row>
        <Row>
          {cards.map((cardData, index) => (
            <Col md={6} lg={columns ? columns : 4} key={index}>
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

  button {
    color: black;
  }

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
  margin: auto;
  padding-bottom: 2rem;
  max-width: 600px;
`;

const SectionInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 3rem;
`;

const SectionInfoBody = styled.div`
  text-align: center;
  max-height: ${(props) => (props.showInfo ? "1000px" : 0)};
  opacity: ${(props) => (props.showInfo ? 1 : 0)};
  padding-bottom: ${(props) => (props.showInfo ? "1rem" : 0)};
  overflow: hidden;
  transition: 400ms ease-in-out;

  p {
    max-width: 600px;
    padding-bottom: 1rem;
  }
`;

const TechIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem 2rem;
  flex-wrap: wrap;
  background: #ffffff55;
  border-radius: 0.5rem;
`;

const BorderButton = styled(Button)`
  border: none;
  background: ${(props) => props.background};
  font-weight: bold;

  &:hover {
    background: ${(props) => props.background};
    border: none;
    color: ${(props) => props.theme.colors.blackGreen};
    opacity: 0.8;
  }

  &:focus {
    background: ${(props) => props.background};
    border: none;
    opacity: 0.8;
    color: ${(props) => props.theme.colors.blackGreen};
  }

  svg {
    transform: ${(props) =>
      props.showInfo ? "rotate(-90deg)" : "rotate(90deg)"};
    transition: transform 200ms;
  }
`;
