import styled from "styled-components";

export const Container = styled.div`
  //border: 1px solid white;
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 5px;
  //border-bottom: 1px solid white;

  ul {
    height: 30px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 20px;
    position: relative;
    padding: 0;

    li {
      display: flex;
      align-items: center;
      justify-content: space-around;
      //border: 1px solid white;
      height: 30px;
      //width: clamp(90px 105px 150px);
      //list-style-type: none;
      width: 100px;
      font-family: "Nunito Sans";
      color: ${(props) => props.colorConfig.textColor};
      font-weight: 500;
      cursor: pointer;
      border-radius: 5px;

      &:hover {
        background-color: ${(props) => props.colorConfig.hoverIcon};
        transition: 0.5s;
      }

      /* &.active {
        background-color: ${(props) => props.colorConfig.hoverIcon};
        transition: 0.5ss;
      } */
    }

    .background-tab-selected {
      position: absolute;
      height: 30px;
      width: ${(props) => props.largura};
      left: ${(props) => props.positionTabSelected + "px"};
      transition: 0.5s;
      background-color: ${(props) => props.colorConfig.hoverIcon};
      border-radius: 5px;
    }

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
  }
`;
