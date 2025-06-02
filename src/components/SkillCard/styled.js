import styled from "styled-components";
import { fontFamily } from "../../config/fonts";

export const Container = styled.div`
  height: 313px;
  width: 360px;
  display: flex;
  flex-direction: row;
  //border: 1px solid white;
  border-radius: 7px;
  //background: #2a2a2a;
  background-color: ${(props) => props.colorConfig.backgroundSkillCard};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  padding: 15px;
  margin-bottom: 20px;
  border: 0.1px solid ${(props) => props.colorConfig.borderColor};
`;

export const SideColor = styled.div`
  height: 100%;
  width: 5px;
  //background: linear-gradient(to bottom, #7f5af0, #00c2ff);
  background: ${(props) => props.color || "red"};
`;

export const CardStructure = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  align-items: end;
`;
export const ContainerIcon = styled.div`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 30px;
  border-radius: 7px;
  //background: linear-gradient(135deg, #1e1e1e, #3e3e3e);
  background: linear-gradient(135deg, #1e1e1e, rgb(46, 46, 46));
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
`;

export const Body = styled.div`
  height: 75%;
  width: 100%;

  .container-title {
    height: 10%;
    //border: 1px solid white;
    margin-bottom: 17px;
  }
  h3 {
    color: ${(props) => props.colorConfig.textColor};
    margin-left: 30px;
    font-size: 13pt;
    font-weight: 500;
    font-family: ${fontFamily.emphasis};
    margin-bottom: 0px;
  }

  .container-description {
    height: 80%;
    //border: 1px solid white;
  }

  p {
    margin-top: 0px;
    margin-left: 30px;
    color: #adb5bd;
    font-family: ${fontFamily.text};
    margin-right: 30px;
  }
`;
