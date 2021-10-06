import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Hero from './components/Hero';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Section from './components/Section';
import data from './data/cards';

export default function Album() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Hero />
            {data.map((sectionData) => {
              const {
                cards,
                title,
                color,
                columns,
                dividerColor,
                buttonColor,
                dividerAlt
              } = sectionData || {};
              return (
                <Section
                  cards={cards}
                  title={title}
                  color={color}
                  dividerColor={dividerColor}
                  buttonColor={buttonColor}
                  dividerAlt={dividerAlt}
                  columns={columns}
                />
              );
            })}
            <Contact />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
