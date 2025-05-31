import styled from "styled-components";
import { fontSizeConfig, fontFamily } from "../../config/fonts";
import { IoExpand } from "react-icons/io5";

export const Container = styled.div`
  height: 120px;
  width: 75%;
  display: flex;
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 0.5px solid rgb(241, 241, 241);
  border-image: linear-gradient(to right, rgba(255, 255, 255, 0.77), rgba(255, 255, 255, 0.77), rgba(247, 246, 246, 0))
    1;
`;

export const DivImage = styled.div`
  height: 100%;
  width: 60%;
  position: relative;

  .expand-container {
    display: none;

    &.visible {
      display: block;
    }
  }

  .expand-container .visible {
    height: 100%;
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    backdrop-filter: blur(2px);
    border-radius: 7px;
    cursor: pointer;
    transition: 0.5s;
  }
  img {
    border-radius: 5px 0px 0px 5px;
    height: 100%;
    width: 100%;
  }
`;

export const Container2 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
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
`;

export const DivDate = styled.div`
  height: 100%;
  width: 100%;
  margin-left: 25px;
  //border: 1px solid white;

  p {
    margin: 0;
    font-family: ${fontFamily.text};
    color: ${(props) => props.colorConfig.textColor};
    font-size: ${fontSizeConfig.normalTextSize};
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
`;

export const ExpandIcon = styled(IoExpand)`
  color: ${(props) => props.colorConfig.iconColor};
`;
