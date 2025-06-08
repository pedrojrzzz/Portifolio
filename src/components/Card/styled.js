import styled from "styled-components";
import { fontSizeConfig } from "../../config/fonts";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { GoDot, GoDotFill } from "react-icons/go";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { FiCode } from "react-icons/fi";
import { GrPersonalComputer } from "react-icons/gr";

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 50px;

  .div-project {
    // Padrão pra todos projetos
    height: 40vh;
    width: 100%;
    display: flex;
    flex-direction: ${(props) => (props.isEven ? "row-reverse" : "row")};
    align-items: center;
    column-gap: 60px;
    margin-bottom: 30px;
    border-radius: 10px;
    border-bottom: 1px solid black;
    border-image: linear-gradient(to right, rgba(66, 66, 66, 0), rgb(211, 211, 211), rgba(247, 246, 246, 0)) 1;
    padding-bottom: 20px;

    @media (max-width: 1536px) {
      column-gap: 40px;
    }

    // Change layout
    @media (max-width: 1280px) {
      display: flex;
      flex-direction: column;
      height: fit-content;
      padding-top: 10px;
      padding-bottom: 10px;
      margin-bottom: 10px;
    }

    @media (max-width: 768px) {
      height: fit-content;
      padding-top: 10px;
      padding-bottom: 20px;
    }
  }
`;

export const InfoProject = styled.div`
  height: 70%;
  width: 50%;

  .container-title {
    height: 10%;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 0px;
    font-size: ${fontSizeConfig.titleSectionFontSize};
    font-weight: 700;
    color: ${(props) => props.colorConfig.textColor};
  }

  .container-description {
    height: 70%;
    max-height: 182px;
    width: 100%;
    overflow-y: hidden;
    margin-top: 15px;
    text-align: center;
    font-size: 11pt;
    color: ${(props) => props.colorConfig.textColor};
    text-indent: 20px;
    text-overflow: ellipsis;
  }

  @media (max-width: 1536px) {
    width: 45%;
  }

  // Break layout
  @media (max-width: 1280px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    .container-title {
      display: none;
    }

    .container-description {
      height: auto;
      max-height: fit-content;
      width: 80%;
      margin-top: 10px;
    }
  }

  @media (max-width: 768px) {
    .container-description {
      height: auto;
      max-height: fit-content;
      width: 100%;
      margin-top: 35px;
    }
  }
`;

export const ContainerTitleMobile = styled.div`
  height: 15%;
  width: 100%;
  display: none;

  @media (max-width: 1280px) {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${fontSizeConfig.titleSectionFontSize};
    font-weight: 700;
    color: ${(props) => props.colorConfig.textColor};
    margin-bottom: 15px;
  }
`;

export const CarouselImages = styled.div`
  height: 60%;
  width: 50%;
  min-width: 333px;
  position: relative;
  margin-left: 30px;
  user-select: none;

  .dots-images {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    image-rendering: smooth;
    background-repeat: no-repeat;
    background-image: cover;
    border-radius: 7px;
    height: 100%;
    width: 100%;
  }

  @media (max-width: 1536px) {
    height: 55%;
    width: 40%;
    min-width: 310px;
  }

  // Break layout
  @media (max-width: 1280px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin-left: 10px;
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

export const ContainerButtons = styled.div`
  height: 20%;
  padding-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 10px;

  @media (max-width: 1280px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Button = styled.button`
  width: 120px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  border: 0.5px solid #2a3038;
  border-radius: 7px;

  a {
    height: 100%;
    width: 100%;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .div-icon {
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  span {
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    //margin-left: 5px;
    color: ${(props) => props.colorConfig.textColor};
  }

  &:hover {
    background-color: rgba(130, 133, 136, 0.11);
  }

  @media (max-width: 1536px) {
    .div-icon {
      width: 25%;
      justify-content: start;
    }

    span {
      width: 75%;
    }
  }

  @media (max-width: 1280px) {
    .div-icon {
      width: 35%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .span {
      width: 65%;
    }
  }
`;

export const DotNotFill = styled(GoDot)`
  color: ${(props) => props.colorConfig.iconsCarouselColor};
`;

export const DotFill = styled(GoDotFill)`
  color: ${(props) => props.colorConfig.iconsCarouselColor};
`;

export const CodeIcon = styled(FiCode)`
  color: #3b82f6;
  font-size: 25px;

  @media (max-width: 1536px) {
    font-size: 22px;
  }

  @media (max-width: 1280px) {
    font-size: 25px;
  }
`;

export const ComputerIcon = styled(GrPersonalComputer)`
  color: #10b981;
  font-size: 25px;

  @media (max-width: 1536px) {
    font-size: 22px;
  }

  @media (max-width: 1280px) {
    font-size: 25px;
  }
`;

export const MagnifyingGlassIcon = styled(HiMiniMagnifyingGlass)`
  color: #8b5cf6;
  font-size: 25px;

  @media (max-width: 1536px) {
    font-size: 20px;
  }

  @media (max-width: 1280px) {
    font-size: 25px;
  }
`;
