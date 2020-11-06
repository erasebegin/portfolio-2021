import React, { useEffect } from "react";

import useWidth from "../hooks/UseWidth";

export default function ImageModal({ isOpen, current, closeModal }) {
  useEffect(() => {
    const modalContainer = document.querySelector(".modal-container");

    modalContainer.addEventListener("click", (e) => {
      if (e.target.classList.contains("modal-container")) {
        closeModal();
      }
    });
  }, []);

  const isMobile = useWidth();
  console.log({ isMobile });
  const modalStyles = {
    container: {
      position: "fixed",
      top: 0,
      left: 0,
      background: "#000000bb",
      height: "100vh",
      width: "100vw",
      zIndex: 100,
      opacity: isOpen ? "1" : "0",
      pointerEvents: isOpen ? "all" : "none",
      transition: "all 200ms ease-out",
      padding: "2% 10%",
    },
    innerContainer: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: isOpen
        ? "translate(-50%, -50%) scale(1)"
        : "translate(-50%, -50%) scale(0.5)",
      transition: "all 200ms ease-out",
      background: "white",
    },
    image: {
      height: isMobile ? "auto" : "60vh",
      width: isMobile ? "90vw" : "auto",
      objectFit: isMobile ? "cover" : "initial",
    },
    text: {
      color: "black",
      fontSize: isMobile ? ".9rem" : "1.1rem",
      lineHeight: "1.7em",
    },
  };

  return (
    <div style={modalStyles.container} className="modal-container">
      <div style={modalStyles.innerContainer} className="modal-inner-container">
        <img
          src={current ? current.image : ""}
          style={modalStyles.image}
          className="modal-image"
        />
        <ul style={modalStyles.text} className="modal-text">
          {current
            ? current.descFull.map((item) => {
                return <li>{item}</li>;
              })
            : ""}
        </ul>
      </div>
    </div>
  );
}
