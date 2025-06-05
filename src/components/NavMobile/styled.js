import styled from "styled-components";

export const Container = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 5px;
  //border-bottom: 1px solid white;

  ul {
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0;
    list-style: none;
    position: relative;

    li {
      display: inline;
      height: 100%;
      width: auto;
      //margin-top: 15px;
      position: relative;
      list-style-type: none;
      font-family: "Nunito Sans";
      color: ${(props) => props.colorConfig.textColor};
      font-weight: 500;
      cursor: pointer;
      padding-left: 10px;
      padding-right: 10px;
      padding-top: 5px;
      padding-bottom: 5px;
      border-radius: 5px;

      &:hover {
        background-color: ${(props) => props.colorConfig.hoverIcon};
      }
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
