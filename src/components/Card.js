import React from "react";
import styled from "styled-components";
import {
    Card,
    CardActionArea,
    CardContent,
    Typography,
    CardActions,
    CardMedia,
    Button,
} from "@material-ui/core";

export default function PortfolioCard({ data, setModalContent, buttonColor }) {
    const { title, description, image, repoUrl, demoUrl, modal } = data || {};

    return (
        <StyledCard>
            <CardActionArea>
                <a href={demoUrl} rel="noopener noreferrer" target="_blank">
                    <CardMedia
                        component="img"
                        height="140"
                        image={image}
                        alt="site screenshot"
                    />
                </a>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        dangerouslySetInnerHTML={{
                            __html: description,
                        }}
                    ></Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <a href={demoUrl} rel="noopener noreferrer" target="_blank">
                    <StyledButton size="small" color="primary">
                        Demo
                    </StyledButton>
                </a>
                {repoUrl && (
                    <a href={repoUrl} rel="noopener noreferrer" target="_blank">
                        <StyledButton $buttonColor={buttonColor}>
                            Repo
                        </StyledButton>
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
            </CardActions>
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
