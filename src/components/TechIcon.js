import { useState } from "react";
import styled from "styled-components";

export default function Icon({ type }) {
  let techLogoPath = "";
  const typeSplit = type.split("-").join(" ");
  const [show, setShow] = useState(false);

  switch (type) {
    case "react":
      techLogoPath = "./images/logos/react.svg";
      break;
    case "styled-components":
      techLogoPath = "./images/logos/styled.jpg";
      break;
    case "node":
      techLogoPath = "./images/logos/node.svg";
      break;

    default:
      techLogoPath = "";
  }

  return (
    <IconContainer
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      show={show}
    >
      <img src={techLogoPath} alt={type} />
      <p>{typeSplit}</p>
    </IconContainer>
  );
}

const IconContainer = styled.div`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  position: relative;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  img {
    max-height: 50px;
    max-width: 50px;
  }

  p {
    font-size: 0.75rem;
    position: absolute;
    top: -3rem;
    left: 50%;
    transform: translateX(-50%);
    background: black;
    color: white;
    padding: 0.5rem;
    border-radius: 0.5rem;
    transition: opacity 200ms;
    white-space: nowrap;

    ${props => !props.show && `
      opacity: 0;
      pointer-events: none;
    `};
  }
`;
