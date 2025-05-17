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
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  margin-right: 20px;
  margin-bottom: 30px;

  .div-project {
    // Padrão pra todos projetos
    height: 180px;
    width: 180px;
    margin-bottom: 20px;
    border: 1px solid ${(props) => props.colorConfig.borderColor};
    border-radius: 10px;

    &:hover {
      display: absolute;
      cursor: pointer;
    }

    h2 {
      color: ${(props) => props.colorConfig.textColor};
    }

    p {
      color: ${(props) => props.colorConfig.textColor};
    }
  }
`;
