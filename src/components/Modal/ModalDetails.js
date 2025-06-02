import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import {
  Modal,
  HeaderModal,
  CloseIcon,
  CarouselContainer,
  DescriptionContainer,
  TechnoContainer,
  ArrowLeft,
  ArrowRight,
  DotFill,
  DotNotFill,
} from "./styled";
import { createPortal } from "react-dom";

import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiRedux } from "react-icons/si";

export default function ModalDetails({ isOpen, setModalIsOpen, project }) {
  const { currentColorConfig } = useSelector((state) => state.theme);
  const modalSelector = useRef(null);
  const [carouselData, setCarouselData] = useState({
    thumbnail: project.thumbnail,
    currentIndex: project.images.indexOf(project.thumbnail),
  });

  //This function already exists in Card Component,
  //  I will remove it soon and make them share the same function
  const changeThumbnail = (indexImageSelected) => {
    let index = indexImageSelected;
    const lengthImages = project.images.length - 1; // index começa do 0, length começa do 1
    if (indexImageSelected > lengthImages) index = 0;
    if (indexImageSelected < 0) index = lengthImages;

    setCarouselData({
      thumbnail: project.images[index],
      currentIndex: index,
    });
  };

  useEffect(() => {
    if (isOpen) {
      modalSelector.current.showModal();
    }
  }, [isOpen]);

  const handleClick = () => {
    setModalIsOpen(false);
    modalSelector.current.close();
  };

  return createPortal(
    <Modal ref={modalSelector} colorConfig={currentColorConfig}>
      <HeaderModal colorConfig={currentColorConfig}>
        <div className="title-container">
          <h1>{project.title}</h1>
        </div>

        <div className="close-container" onClick={handleClick}>
          <CloseIcon size={30} colorConfig={currentColorConfig} style={{ minHeight: "30px", minWidth: "30px" }} />
        </div>
      </HeaderModal>

      <CarouselContainer>
        {/** Carousel  */}
        <ArrowLeft colorConfig={currentColorConfig} onClick={() => changeThumbnail(carouselData.currentIndex - 1)} />
        {<img src={carouselData.thumbnail} alt={project.title} />}
        <ArrowRight colorConfig={currentColorConfig} onClick={() => changeThumbnail(carouselData.currentIndex + 1)} />
        <div className="dots-images">
          {project.images.map((n, index) =>
            index === carouselData.currentIndex ? (
              <DotFill key={index} size={20} colorConfig={currentColorConfig} />
            ) : (
              <DotNotFill key={index} size={20} colorConfig={currentColorConfig} />
            )
          )}
        </div>
      </CarouselContainer>

      <DescriptionContainer colorConfig={currentColorConfig}>
        <div className="title-description-container">
          <h3>Descrição</h3>
        </div>

        <div className="description-container">
          <p>{project.description}</p>
        </div>
      </DescriptionContainer>

      <TechnoContainer colorConfig={currentColorConfig}>
        <div className="title-techno-container">
          <h3>Tecnologias Utilizadas</h3>
        </div>

        <div className="technologies-used">
          <FaReact size={30} color="#61DAFB" />
          <IoLogoJavascript size={30} color="#F7DF1E" />
          <SiRedux size={30} color="#764ABC" />
        </div>
      </TechnoContainer>
    </Modal>,
    // eslint-disable-next-line no-undef
    document.body
  );
}
