import styled from "styled-components";
import { fontSizeConfig } from "../../config/fonts";
import { Link } from "react-router-dom";
import { colorDarkTheme } from "../../config/color";

export const ContainerNav = styled.nav`
  height: 60px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  background: blur(10px);
  background-color: ${(props) => props.colorConfig.backgroundColor};
  border-bottom: 1px solid black;
  border-image: linear-gradient(to right, rgba(66, 66, 66, 0), rgb(211, 211, 211), rgba(247, 246, 246, 0)) 1;
  transition: 0.2s;
`;

export const ContainerLogo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  white-space: nowrap; // Impede a quebra de linha
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  animation: move-bg 3s ease infinite;
  background-size: 400% 400%;
  background-clip: text;
  p {
    margin-left: 25px;
    color: transparent;
  }

  & p {
    font-family: "Playfair Display";
    font-weight: 500;
    letter-spacing: 1px;
    font-size: ${fontSizeConfig.logoFontSize};
  }

  @keyframes move-bg {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const ContainerLinks = styled.div`
  height: 100%;
  width: 80%;
  padding-left: 100px;
  padding-right: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerThemeToggle = styled.div`
  height: 100%;
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;

  .circle {
    height: 25px;
    width: 25px;
    border-radius: 50%;
    clip-path: circle();
    box-shadow: inset 0 0 0 5px #000000; /* Borda interna preta */
    cursor: pointer;
  }

  .inside-circle-dark {
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background: linear-gradient(90deg, white 50%, black 50%);
    box-shadow: inset 0 0 0 3px white; /* Borda interna preta */
    transition: 0.5s;
  }

  .inside-circle-light {
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background: linear-gradient(90deg, black 50%, white 50%);
    box-shadow: inset 0 0 0 3px black; /* Borda interna preta */
    transform: rotate(180deg);
    transition: 0.5s;
  }

  @media (max-width: 640px) {
    margin-right: 10px;
  }
`;

export const StyledLink = styled(Link)`
  font-family: "Nunito Sans";
  font-size: ${fontSizeConfig.linksNavFontSize};
  font-weight: 400;
  margin-left: 50px;
  text-decoration: none;
  color: ${colorDarkTheme.textColor};
`;
