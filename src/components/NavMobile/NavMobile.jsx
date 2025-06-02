import React from "react";
import { Container } from "./styled";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

export default function NavMobile({ handle }) {
  const { currentColorConfig } = useSelector((state) => state.theme);

  const handleChangeTabBackground = (event) => {
    const rect = event.target.getBoundingClientRect();
    console.log(rect);
    handle(event);
  };
  return (
    <Container colorConfig={currentColorConfig}>
      <ul>
        <div>
          <div className="back"></div>
          <li onClick={handleChangeTabBackground} className="active">
            Sobre
          </li>
          <li onClick={handle}>Projetos</li>
          <li onClick={handle}>Certificações</li>
          <li onClick={handle}>Habilidades</li>
        </div>
      </ul>
    </Container>
  );
}

NavMobile.propTypes = {
  handle: PropTypes.func,
};
