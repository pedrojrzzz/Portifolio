import styled from "styled-components";
import { fontSizeConfig } from "../../config/fonts";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { GoDot, GoDotFill } from "react-icons/go";

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 50px;

  .div-project {
    // Padrão pra todos projetos
    height: 25vh;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 60px;
    margin-bottom: 30px;
    //border: 1px solid ${(props) => props.colorConfig.borderColor};
    border-radius: 10px;
    //background-color: ${(props) => props.colorConfig.backgroundCardColor};

    .carousel-images {
      height: 100%;
      width: 47%;
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
    }

    .info-project {
      height: 100%;
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
        width: 100%;
        margin-top: 15px;
        text-align: center;
        font-size: 11pt;
        color: ${(props) => props.colorConfig.textColor};
        text-indent: 20px;
      }

      .container-buttons {
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

        .status {
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
      }
    }
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
