import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

export const Modal = styled.dialog`
  position: fixed;
  top: 30px;
  height: 100%;
  width: 40%;
  min-width: 300px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.colorConfig.backgroundModal};
  border: none;
  scroll-behavior: auto;

  &::backdrop {
    backdrop-filter: blur(10px);
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

export const closeIcon = styled(IoMdClose)`
  color: ${(props) => props.colorConfig.iconColor};
  flex-shrink: 0;
`;

export const CarouselContainer = styled.div`
  height: 30%;
  min-height: 200px;
  width: 90%;
  position: relative;
  user-select: none;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  margin-top: 10px;

  .carousel-images {
    height: 90%;
    width: 100%;
    border: 1px solid white;
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
