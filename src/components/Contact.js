import {
    Card,
    Button,
    FormGroup,
    FormControl,
    FormLabel,
} from "@material-ui/core";
import React from "react";
import styled, { useTheme } from "styled-components";
import Divider from "./Divider";

export default function Contact({ isOpen }) {
    const colors = useTheme().colors;

    return (
        <ContactContainer $isOpen={isOpen} className={isOpen && "open"} raised>
                <Divider color={colors.green} />
                <form action="https://formspree.io/f/meqpkeej" method="POST">
                    <h2>Contact</h2>
                    <FormGroup>
                        <FormLabel htmlFor="name-input">Name</FormLabel>
                        <FormControl
                            id="name-input"
                            name="name"
                            placeholder="Name"
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel htmlFor="email-input">Email </FormLabel>
                        <FormControl
                            id="email-input"
                            name="email"
                            placeholder="Email"
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormControl
                            as="textarea"
                            id="message-input"
                            aria-label="message"
                            placeholder="Message"
                            name="message"
                        />
                    </FormGroup>
                    <Button type="submit">Submit</Button>
                </form>
        </ContactContainer>
    );
}

const ContactContainer = styled(Card)`
    padding: 3rem 1rem;
    position: fixed;
    width: 600px;
    left: 50%;
    top: 50%;
    transform: translate(200%, -50%);
    background: ${(props) => props.theme.colors.green};
    z-index: 10;
    transition: transform 400ms ease-in-out;

    &.open {
        transform: translate(-50%, -50%);
        transition: transform 400ms ease-in-out;
    }

    ${(props) =>
        props.$isOpen &&
        `
    `};

    h2 {
        text-align: center;
        font-family: ${(props) => props.theme.fonts.title};
        font-weight: 600;
        font-size: 3rem;
        margin-bottom: 2rem;
    }

    input,
    textarea {
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
