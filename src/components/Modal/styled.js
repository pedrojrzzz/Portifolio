import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { GoDot, GoDotFill } from "react-icons/go";

export const Modal = styled.dialog`
  position: fixed;
  top: 30px;
  height: fit-content;
  width: 50%;
  min-width: 300px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.colorConfig.backgroundModal};
  border: 0.1px solid rgba(68, 68, 68, 0.47);
  overflow-x: hidden;
  scroll-behavior: auto;
  border-radius: 7px;
  //padding-bottom: 50px;

  &::backdrop {
    backdrop-filter: blur(10px);
  }

  @media (max-width: 1024px) {
    width: 70%;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const HeaderModal = styled.div`
  height: 5%;
  width: 100%;
  min-height: 40px;
  min-width: 300px;
  display: flex;
  justify-content: end;
  align-items: center;
  padding-bottom: 5px;
  border-bottom: 0.5px solid ${(props) => props.colorConfig.borderColorModal};

  .title-container {
    height: 40px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;

    h1 {
      color: ${(props) => props.colorConfig.textColor};
    }
  }

  .close-container {
    height: 40px;
    width: 40px;
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    border-radius: 50%;

    &:hover {
      background-color: rgba(130, 133, 136, 0.11);
    }
  }
`;

export const CloseIcon = styled(IoMdClose)`
  color: ${(props) => props.colorConfig.iconColor};
  flex-shrink: 0;
`;

export const CarouselContainer = styled.div`
  height: 30%;
  width: 85%;
  min-width: 250px;
  position: relative;
  user-select: none;
  //border: 1px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  margin-top: 25px;

  .carousel-images {
    height: 100%;
    width: 100%;
    border: 1px solid white;
  }

  img {
    image-rendering: smooth;
    background-repeat: no-repeat;
    background-image: cover;
    border-radius: 7px;
    height: 100%;
    width: 100%;
  }

  .dots-images {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 1536px) {
    width: 90%;
  }
`;

export const ArrowLeft = styled(MdArrowBackIosNew)`
  color: ${(props) => props.colorConfig.iconsCarouselColor};
  position: absolute;
  left: -30px;
  top: 47%;
  z-index: 2;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export const ArrowRight = styled(MdArrowForwardIos)`
  color: ${(props) => props.colorConfig.iconsCarouselColor};
  position: absolute;
  right: -30px;
  top: 50%;
  z-index: 2;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export const DotNotFill = styled(GoDot)`
  color: ${(props) => props.colorConfig.iconsCarouselColor};
`;

export const DotFill = styled(GoDotFill)`
  color: ${(props) => props.colorConfig.iconsCarouselColor};
`;

export const DescriptionContainer = styled.div`
  width: 90%;
  height: fit-content;
  //border: 1px solid white;
  margin-top: 5px;

  .title-description-container h3 {
    color: ${(props) => props.colorConfig.textColor};
    font-weight: 600;
    margin-bottom: 0;
  }

  .description-container p {
    //color: ${(props) => props.colorConfig.textColor};
    color: #adb5bd;
    margin: 0px 0px;
  }
`;

export const TechnoContainer = styled.div`
  width: 90%;
  height: fit-content;
  //border: 1px solid white;
  margin-top: 0px;

  .title-techno-container h3 {
    display: flex;
    align-items: center;
    justify-content: start;
    color: ${(props) => props.colorConfig.textColor};
    margin-bottom: 5px;
    margin-top: 0px;
  }

  .technologies-used {
    display: flex;
    column-gap: 15px;
    //margin-left: 15px;
  }
`;
