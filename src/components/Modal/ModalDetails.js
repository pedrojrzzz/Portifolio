import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Modal, HeaderModal, CarouselContainer } from "./styled";
import { createPortal } from "react-dom";
import { IoMdClose } from "react-icons/io";
import { ArrowLeft, ArrowRight } from "./styled";

export default function ModalDetails({ isOpen, setModalIsOpen, project }) {
  const { currentColorConfig } = useSelector((state) => state.theme);
  const modalSelector = useRef(null);

  useEffect(() => {
    if (isOpen) {
      modalSelector.current.showModal();
    }
  }, [isOpen]);

  const handleClick = () => {
    setModalIsOpen(false);
    modalSelector.current.close();
    console.log("oi");
  };

  return createPortal(
    <Modal ref={modalSelector} colorConfig={currentColorConfig}>
      <HeaderModal colorConfig={currentColorConfig}>
        <div className="title-container">
          <h1>Detalhes</h1>
        </div>

        <div className="close-container" onClick={handleClick}>
          <IoMdClose size={30} color="white" style={{ minHeight: "30px", minWidth: "30px" }} />
        </div>
      </HeaderModal>

      <CarouselContainer>
        {/** Carousel  */}
        <ArrowLeft colorConfig={currentColorConfig} />
        <div className="carousel-images"></div>
        <ArrowRight colorConfig={currentColorConfig} />
      </CarouselContainer>
      <div className="title-container"></div>
      <div className="description-container"></div>
      <div className="techno-container"></div>
    </Modal>,
    document.body
  );
}
