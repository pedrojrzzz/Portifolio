import React from "react";
import { Container, ContainerIcon, SideColor, CardStructure, Header, Body } from "./styled";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

export default function SkillCard({ children }) {
  const { currentColorConfig } = useSelector((state) => state.theme);
  return (
    <Container colorConfig={currentColorConfig}>
      <SideColor />
      <CardStructure>
        <Header>
          <ContainerIcon>{children}</ContainerIcon>
        </Header>
        <Body colorConfig={currentColorConfig}>
          <h3>JavaScript</h3>
          <p>
            Com JavaScript, desenvolvo interfaces interativas e dinâmicas para a web, utilizando recursos modernos da
            linguagem como funções assíncronas, manipulação de eventos e estruturas modulares. Tenho experiência com
            frameworks como React e bibliotecas como Redux e Zustand para construir aplicações escaláveis e de alta
            performance.
          </p>
        </Body>
      </CardStructure>
    </Container>
  );
}

SkillCard.propTypes = {
  children: PropTypes.element,
};
