import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Element } from 'react-scroll';
import styled, { useTheme } from 'styled-components';
import Divider from './Divider';

export default function Contact() {
  const colors = useTheme().colors;

  return (
    <ContactContainer>
      <Element name="contact">
        <Divider color={colors.yellow} />
        <Container>
          <Form action="https://formspree.io/f/meqpkeej" method="POST">
            <h2>Contact</h2>
            <Row>
              <Col md={{ span: 6, offset: 3 }}>
                <Form.Group>
                  <Form.Label htmlFor="name-input">Name</Form.Label>
                  <Form.Control
                    id="name-input"
                    name="name"
                    placeholder="Name"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="email-input">Email </Form.Label>
                  <Form.Control
                    id="email-input"
                    name="email"
                    placeholder="Email"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    as="textarea"
                    id="message-input"
                    aria-label="message"
                    placeholder="Message"
                    name="message"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={{ span: 2, offset: 5 }}>
                <Button type="submit">Submit</Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </Element>
    </ContactContainer>
  );
}

const ContactContainer = styled.div`
  padding-top: 10rem;
  padding-bottom: 8rem;
  position: relative;

  h2 {
    text-align: center;
    font-family: ${(props) => props.theme.fonts.title};
    font-weight: 600;
    font-size: 3rem;
    margin-bottom: 2rem;
  }

  input, textarea {
    margin-bottom: 1rem;

    &::placeholder {
      font-family: ${(props) => props.theme.fonts.main};
      font-weight: 300;
      color: #e5e5e5;
    }
  }

  textarea {
    height: 150px;
  }

  label {
    display: none;
  }

  button {
    width: 100%;
    margin-top: 1rem;
    background: ${(props) => props.theme.colors.green};
    border: none;
    
    &:hover {
      background: ${(props) => props.theme.colors.blue};
      opacity: 0.95;
    }
  }
`;
