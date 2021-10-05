import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';

export default function ImageModal({ modalContent }) {
  const [isOpen, setIsOpen] = useState(false);
  console.log({ modalContent });
  useEffect(() => {
    if (Object.keys(modalContent).length > 0) {
      setIsOpen(true);
    }
  }, [modalContent]);

  const checkClose = (e) => {
    if (e.target.classList.contains('modal-container')) {
      setIsOpen(false);
    }
  };

  return (
    <ModalContainer
      onClick={checkClose}
      $isOpen={isOpen}
      className="modal-container"
    >
      <InnerContainer>
        <Card.Img src={modalContent?.image} />
        <Body>
          <ul>
            {modalContent && modalContent.list?.map((item) => <li>{item}</li>)}
          </ul>
        </Body>
      </InnerContainer>
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: #000000bb;
  height: 100vh;
  width: 100vw;
  z-index: 10;
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  pointer-events: ${(props) => (props.$isOpen ? 'all' : 'none')};
  transition: all 200ms ease-out;
  padding: 2% 10%;
`;

const InnerContainer = styled(Card)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 90vh;
  transition: all 200ms ease-out;
  background: white;
  overflow-y: auto;
`;

const Body = styled(Card.Body)`
  padding: 2rem 1rem 2rem 3rem;

  @media (max-width: 700px) {
    font-size: 1rem;
  }

  li {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;
