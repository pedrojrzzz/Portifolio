import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 5px;

  ul {
    list-style: none;
    padding-inline-start: 0;
    height: 30px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 20px;
    list-style: disc;

    li {
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 30px;
      width: auto;
      padding: 5px;
      font-family: "Nunito Sans";
      color: ${(props) => props.colorConfig.textColor};
      font-weight: 500;
      cursor: pointer;
      border-radius: 5px;

      &:hover {
        background-color: ${(props) => props.colorConfig.hoverIcon};
        transition: 0.5s;
      }

      &.active {
        background-color: ${(props) => props.colorConfig.hoverIcon};
        transition: 0.5ss;
      }
    }

    /* .background-tab-selected {
      position: absolute;
      height: 30px;
      width: ${(props) => props.largura};
      left: ${(props) => props.positionTabSelected + "px"};
      transition: 0.5s;
      background-color: ${(props) => props.colorConfig.hoverIcon};
      border-radius: 5px;
    } */

    /* .back {
      position: absolute;
      top: ${(props) => props.position};
      z-index: -1;
      height: 25px;
      width: 100px;
      padding-left: 10px;
      padding-right: 10px;
      padding-top: 5px;
      padding-bottom: 5px;
      border-radius: 5px;
      //background-color: ${(props) => props.colorConfig.hoverIcon};
      transition: 0.2s ease-in-out;
    } */

    @media (max-width: 640px) {
      width: 330px;
      align-items: start;
      justify-content: start;

      ul {
        display: flex;
        align-items: center;
        justify-content: start;
        column-gap: 0px;
      }

      li {
        justify-content: start;
        font-size: 15px;
        font-weight: 700;
      }
    }

    @media (max-width: 400px) {
      li {
        justify-content: start;
        font-size: 13px;
        font-weight: 700;
      }
    }
  }
`;
