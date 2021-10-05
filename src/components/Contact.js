import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import {Element} from 'react-scroll';
import Divider from './Divider'

export default function Contact() {
  return (
    <>
    <Divider />
      <Element name="contact">
        <Form action="https://formspree.io/f/meqpkeej" method="POST">
          <h2>Contact</h2>
          <Form.Group>
            <Form.Label htmlFor="name-input">Name</Form.Label>
            <Form.Control id="name-input" name="name" />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="email-input">Email </Form.Label>
            <Form.Control id="email-input" name="email" />
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
          <Button
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </Element>
    </>
  );
}
