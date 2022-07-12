import { useState } from "react";
import { Button } from "@material-ui/core";
import styled, { css, useTheme } from "styled-components";
import { HiMail, HiCode } from "react-icons/hi";
import Divider from "./Divider";
import Logos from "./Logos";

export default function Hero({ openContact, setOpenContact }) {
    const [showLogos, setShowLogos] = useState(false);

    const colors = useTheme().colors;

    return (
        <div>
            <Divider color={colors.blue} />
            <HeroTop>
                <ImageContainer>
                    <StyledButton
                        onClick={() => setShowLogos(!showLogos)}
                        $left
                        $showLogos={showLogos}
                    >
                        <HiCode size="2rem" />
                        <p>My skills</p>
                    </StyledButton>
                    <StyledButtonClose
                        onClick={() => setShowLogos(false)}
                        $showLogos={showLogos}
                    >
                        X
                    </StyledButtonClose>
                    <Logos showLogos={showLogos} />
                    <Image src="./images/headshot3-small.jpg" alt="headshot" />
                    <StyledButton
                        $right
                        onClick={() => setOpenContact(!openContact)}
                    >
                        <HiMail size="2rem" />
                        <p>Say hi</p>
                    </StyledButton>
                </ImageContainer>
                <h2>Chris Haupt's</h2>
                <h1>Portfolio</h1>
                <h5>
                    A collection of some of my favourite projects created over
                    the years using <b>React</b>.
                </h5>
            </HeroTop>
        </div>
    );
}

const HeroTop = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 12rem;
    color: ${(props) => props.theme.colors.blackGreen};

    @media (max-width: 600px) {
        padding-top: 6rem;
    }

    h1 {
        font-family: ${(props) => props.theme.fonts.title};
        font-weight: 600;
        font-size: 8rem;

        @media (max-width: 600px) {
            font-size: 6rem;
        }
    }

    h2 {
        font-family: ${(props) => props.theme.fonts.title};
        font-weight: 600;
        font-size: 4rem;
        margin-bottom: 0;
        line-height: 1rem;

        @media (max-width: 600px) {
            margin-top: 4rem;
            margin-bottom: 2rem;
        }
    }

    h5 {
        text-align: center;
        font-weight: 200;
        font-size: 2rem;
        max-width: 400px;
        margin-bottom: 2rem;

        @media (max-width: 600px) {
            font-size: 1.5rem;
        }
    }
`;

const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    @media (max-width: 600px) {
        flex-direction: column;
    }
`;

const Image = styled.img`
    height: 400px;
    width: 400px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 3rem;
    z-index: 3;

    @media (max-width: 600px) {
        height: 350px;
        width: 350px;
    }
`;

const StyledButton = styled(Button)`
    height: 100px;
    background: ${(props) => props.theme.colors.green};
    border: none;
    white-space: nowrap;
    color: ${(props) => props.theme.colors.blackGreen};

    /* Skills Button (Desktop:Left, Mobile:Top) */
    ${(props) =>
        props.$left &&
        css`
            border-top-left-radius: 2rem;
            border-bottom-left-radius: 2rem;
            padding-right: 3rem;
            padding-left: 2rem;
            margin-right: -2rem;

            @media (max-width: 600px) {
                height: auto;
                width: 120px;
                border-top-right-radius: 2rem;
                border-bottom-right-radius: 2rem;
                padding: 1rem 0 3rem;
                margin-right: 0;
                margin-bottom: -2rem;
                transform: translateY(${props.$showLogos ? "100%" : "0%"});
                transition: 200ms ease-in-out;
            }
        `};

    /* Contact Button (Desktop:Right, Mobile:Bottom) */
    ${(props) =>
        props.$right &&
        css`
            border-top-right-radius: 2rem;
            border-bottom-right-radius: 2rem;
            padding-left: 4rem;
            padding-right: 2rem;
            margin-left: -2rem;

            @media (max-width: 600px) {
                height: auto;
                width: 120px;
                border-top-left-radius: 2rem;
                border-bottom-left-radius: 2rem;
                padding: 3rem 0 1rem;
                margin-left: 0;
                margin-top: -5rem;
            }
        `};

    &:hover {
        background: ${(props) => props.theme.colors.blue};
    }

    &:focus {
        background: ${(props) => props.theme.colors.blue};
    }

    &:active {
        outline: red;
        border: red;
    }

    svg {
        margin-bottom: 0.5rem;
    }

    p {
        margin-bottom: 0;
        font-family: ${(props) => props.theme.fonts.main};
    }
`;

const StyledButtonClose = styled(StyledButton)`
    position: absolute;
    top: ${(props) => (props.$showLogos ? "4rem" : "8rem")};
    margin-right: 4rem;
    height: 80px;
    border-radius: 2rem;
    padding-bottom: 4rem;
    transition: top 200ms ease-in-out;

    @media (min-width: 600px) {
        display: none;
    }
`;
