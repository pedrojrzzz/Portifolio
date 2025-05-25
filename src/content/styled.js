import styled from "styled-components";
import { fontFamily, fontSizeConfig } from "../config/fonts";

export const Paragraph = styled.p`
  color: ${(props) => props.colorConfig.textColor};
  font-family: ${fontFamily.text};
  font-size: ${fontSizeConfig.normalTextSize};
  z-index: -1;

  .emphasis {
    color: #a78bfa;
    //color: rgb(148, 250, 139);
  }
`;

export const DivContainer = styled.div`
  height: 40%;
  width: 100%;
  background-color: red;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  margin-right: 20px;
  margin-bottom: 30px;

  .div-project {
    // Padrão pra todos projetos
    height: 180px;
    width: 100%;
    margin-bottom: 20px;
    border: 1px solid ${(props) => props.colorConfig.borderColor};
    border-radius: 10px;
    background-color: #222831;

    /* .thumbnail {
      height: 180px;
      width: 100%;
      position: relative;

      img {
        image-rendering: smooth;
        background-repeat: no-repeat;
        background-image: cover;
        height: 100%;
        width: 100%;
        border-radius: 10px 10px 0px 0px;
      }
    }
    .container-images {
      width: 100%;
      min-width: 50%;
      height: 50px;
      display: flex;
      column-gap: 25px;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid ${(props) => props.colorConfig.borderColor};
    }
    .images {
      height: 40px;
      width: 65px;
      border-radius: 5px;
      cursor: pointer;

      img {
        image-rendering: smooth;
        background-repeat: no-repeat;
        background-image: cover;
        height: 100%;
        width: 100%;
        border-radius: 7px;
      }
    }

    .images.selected {
      opacity: 0.8;
    }

    h2 {
      color: ${(props) => props.colorConfig.textColor};
    }

    p {
      color: ${(props) => props.colorConfig.textColor};
    } */
  }
`;
