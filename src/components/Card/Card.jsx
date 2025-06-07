import React, { useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  DivContainer,
  CarouselImages,
  InfoProject,
  ContainerButtons,
  ArrowLeft,
  ArrowRight,
  DotFill,
  DotNotFill,
  MagnifyingGlassIcon,
  CodeIcon,
  ComputerIcon,
} from "./styled";
import ModalDetails from "../Modal/ModalDetails";

export function Card({ project }) {
  const { currentColorConfig } = useSelector((state) => state.theme);

  const [carouselData, setCarouselData] = useState({
    thumbnail: project.thumbnail,
    currentIndex: project.images.indexOf(project.thumbnail),
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);

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

  // Set which project will displayed with row-reverse
  const isEven = project.id % 2 === 0 ? true : false;

  return (
    <DivContainer colorConfig={currentColorConfig} isEven={isEven}>
      <div className="div-project">
        {/** Carousel  */}
        <CarouselImages>
          <ArrowLeft
            colorConfig={currentColorConfig}
            size={25}
            onClick={() => changeThumbnail(carouselData.currentIndex - 1)}
          />
          {<img src={carouselData.thumbnail} alt={project.title} />}
          <ArrowRight
            colorConfig={currentColorConfig}
            size={25}
            onClick={() => changeThumbnail(carouselData.currentIndex + 1)}
          />

          <div className="dots-images">
            {project.images.map((n, index) =>
              index === carouselData.currentIndex ? (
                <DotFill key={index} size={20} colorConfig={currentColorConfig} />
              ) : (
                <DotNotFill key={index} size={20} colorConfig={currentColorConfig} />
              )
            )}
          </div>
        </CarouselImages>

        {/** Info Project */}
        <InfoProject colorConfig={currentColorConfig}>
          <div className="container-title">{project.title}</div>

          <div className="container-description">{project.description}</div>

          <ContainerButtons colorConfig={currentColorConfig}>
            <button className="repo-github">
              <Link to={project.repository} target="_blanket">
                <CodeIcon color="#3B82F6" />
                <span>Repositório</span>
              </Link>
            </button>

            <button className="details" onClick={() => setModalIsOpen(true)}>
              <MagnifyingGlassIcon color="#8B5CF6" />
              <span>Detalhes</span>
            </button>

            <button className="website">
              <Link to={project.websiteDemo} target="_blanket">
                <ComputerIcon color="#10B981" />
                <span>Demo</span>
              </Link>
            </button>
          </ContainerButtons>
        </InfoProject>
      </div>

      {modalIsOpen && <ModalDetails isOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} project={project} />}
    </DivContainer>
  );
}

Card.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    thumbnail: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
    repository: PropTypes.string,
    websiteDemo: PropTypes.string,
  }),
};
