import styled from "styled-components";
import { fontSizeConfig, fontFamily } from "../../config/fonts";
import { IoExpand } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

export const Container = styled.div`
  height: 130px;
  width: 100%;
  display: flex;
  margin-bottom: 30px;
  padding-bottom: 30px;
  //border-bottom: 0.5px solid rgb(241, 241, 241);
  //border-image: linear-gradient(to right, rgba(255, 255, 255, 0.77), rgba(255, 255, 255, 0.77), rgba(247, 246, 246, 0))1;
  border-bottom: 1px solid ${(props) => props.colorConfig.borderColor};

  /* @media (max-width: 1024px) {
    flex-direction: column;
    height: 50vh;
    padding: 15px;
  } */

  @media (max-width: 768px) {
    height: 145px;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    height: fit-content;
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

export const DivImage = styled.div`
  height: 100%;
  width: 40%;
  min-width: 200px;
  position: relative;

  img {
    border-radius: 5px;
    height: 100%;
    width: 100%;
  }

  @media (max-width: 640px) {
    width: 100%;
    height: 50%;
    min-height: 100px;
  }
`;

export const ContainerInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .paragraph-certificate {
    font-size: "10pt";
    margin-top: "0px";
    font-weight: "700";
    margin-left: 25px;
    margin-top: 0;
    margin-bottom: 0;
    color: rgb(80, 80, 80);
  }

  @media (max-width: 640px) {
    align-items: center;
    justify-content: center;
    margin-top: 6px;
  }
`;

export const DivTitle = styled.div`
  height: fit-content;
  width: 100%;
  margin-left: 25px;
  margin-top: 1px;
  //border: 1px solid white;
  white-space: normal;

  color: ${(props) => props.colorConfig.textColor};

  h3 {
    margin: 0;
    font-family: ${fontFamily.text};
    font-size: ${fontSizeConfig.normalTextSize};
    font-weight: bold;
  }

  @media (max-width: 640px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5px;

    h3 {
      text-align: center;
    }
  }
`;

export const DivPlatform = styled.div`
  height: 100%;
  width: 100%;
  margin-left: 25px;
  font-size: "12pt";
  font-weight: "400";

  p {
    margin: 0;
    font-family: ${fontFamily.text};
    color: ${(props) => props.colorConfig.textColor};
    font-size: ${fontSizeConfig.normalTextSize};
  }

  @media (max-width: 640px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const DivDate = styled.div`
  height: 100%;
  width: 100%;
  margin-left: 25px;
  font-size: "12pt";
  font-weight: "400";

  p {
    margin: 0;
    font-family: ${fontFamily.text};
    color: ${(props) => props.colorConfig.textColor};
    font-size: ${fontSizeConfig.normalTextSize};
  }

  @media (max-width: 640px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const DivButtons = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: end;
  justify-content: start;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    cursor: pointer;
    border: 0.5px solid #2a3038;
    border-radius: 7px;
    padding: 7px;
    margin-left: 20px;

    span {
      padding-left: 5px;
      color: ${(props) => props.colorConfig.textColor};
      font-family: ${fontFamily.text};
    }

    &:hover {
      background-color: rgba(130, 133, 136, 0.11);
    }
  }

  @media (max-width: 640px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
  }
`;

export const ExpandIcon = styled(IoExpand)`
  color: ${(props) => props.colorConfig.iconColor};
`;

export const ModalImage = styled.dialog`
  height: 70%;
  width: 60%;

  background-color: ${(props) => props.colorConfig.backgroundModal};
  border: none;
  border-radius: 7px;
  overflow: hidden;

  &::backdrop {
    backdrop-filter: blur(7px);
  }

  .header-modal {
    height: 3%;
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    flex-shrink: 0;
  }

  .container-image {
    height: 95%;
    width: 100%;
    margin-top: 10px;
  }

  img {
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 5px;
    height: 100%;
    width: 100%;
  }

  @media (max-width: 1536px) {
    height: 65%;
    //width: 65%;
    //min-width: 885px;
  }

  @media (max-width: 1280px) {
    height: 60%;
    width: 70%;
    //min-width: 820px;
  }

  @media (max-width: 1024px) {
    height: 35%;
    width: 75%;
    // min-width: 770px;
  }

  @media (max-width: 768px) {
    height: 40%;
    width: 80%;
    //min-width: 635px;
  }

  @media (max-width: 640px) {
    height: 35%;
    width: 80%;
    //min-width: 100px;
  }

  @media (max-width: 500px) {
    height: 28%;
    width: 85%;
  }

  @media (max-width: 400px) {
    height: 25%;
    width: 90%;
  }
`;

export const CloseIcon = styled(IoMdClose)`
  color: ${(props) => props.colorConfig.iconColor};
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;
