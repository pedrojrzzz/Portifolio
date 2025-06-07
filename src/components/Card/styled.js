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

    // Change layout
    @media (max-width: 1280px) {
      display: flex;
      flex-direction: column;
      height: auto;
      padding-top: 10px;
      padding-bottom: 10px;
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

  a {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .repo-github {
    width: 33.3%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    cursor: pointer;
    border: 0.5px solid #2a3038;
    border-radius: 7px;
    padding: 7px;

    span {
      padding-left: 5px;
      color: ${(props) => props.colorConfig.textColor};
    }

    &:hover {
      background-color: rgba(130, 133, 136, 0.11);
    }
  }

  .details {
    width: 33.3%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: 0.5px solid #2a3038;
    border-radius: 7px;
    padding: 7px;
    cursor: pointer;

    span {
      padding-left: 5px;
      color: ${(props) => props.colorConfig.textColor};
    }

    &:hover {
      background-color: rgba(130, 133, 136, 0.11);
    }
  }

  .website {
    width: 33.3%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    cursor: pointer;
    border: 0.5px solid #2a3038;
    border-radius: 7px;
    padding: 7px;

    span {
      padding-left: 5px;
      color: ${(props) => props.colorConfig.textColor};
    }

    &:hover {
      background-color: rgba(130, 133, 136, 0.11);
    }
  }
`;

export const CarouselImages = styled.div`
  height: 60%;
  width: 50%;
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

export const CodeIcon = styled(FiCode)`
  color: #3b82f6;
  font-size: 25px;

  @media (max-width: 1536px) {
    font-size: 20px;
  }
`;

export const ComputerIcon = styled(GrPersonalComputer)`
  color: #10b981;
  font-size: 25px;

  @media (max-width: 1536px) {
    font-size: 20px;
  }
`;

export const MagnifyingGlassIcon = styled(HiMiniMagnifyingGlass)`
  color: #8b5cf6;
  font-size: 25px;

  @media (max-width: 1536px) {
    font-size: 20px;
  }
`;
