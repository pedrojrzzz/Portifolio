import React from "react";
import { Container, ContainerIcon, SideColor, CardStructure, Header, Body } from "./styled";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

export default function SkillCard({ technologies }) {
  const { currentColorConfig } = useSelector((state) => state.theme);

  const { id, title, textDescription, children, sideColor } = technologies;
  return (
    <Container colorConfig={currentColorConfig} key={id}>
      <SideColor color={sideColor} />
      <CardStructure>
        <Header>
          <ContainerIcon>{children}</ContainerIcon>
        </Header>
        <Body colorConfig={currentColorConfig}>
          <div className="container-title">
            <h3>{title}</h3>
          </div>
          <div className="container-description">
            <p>{textDescription}</p>
          </div>
        </Body>
      </CardStructure>
    </Container>
  );
}

SkillCard.propTypes = {
  technologies: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    textDescription: PropTypes.string,
    children: PropTypes.element,
    sideColor: PropTypes.string,
  }),
};
