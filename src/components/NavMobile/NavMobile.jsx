import React, { useRef, useState } from "react";
import { Container } from "./styled";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

export default function NavMobile({ handle }) {
  const { currentColorConfig } = useSelector((state) => state.theme);
  let currentTargetRef = useRef(null);

  const handleClickNav = (event) => {
    currentTargetRef.current.classList.remove("active"); // Removing class of the previous element
    currentTargetRef.current = event.target; // Reassing
    currentTargetRef.current.classList.add("active"); // Adding class of the current element
    handle(event);
  };
  return (
    <Container colorConfig={currentColorConfig}>
      <ul>
        <div>
          {/* <div className="back"></div> */}
          <li className="background-tab-selected"></li>
          <li onClick={handleClickNav} ref={currentTargetRef} className="active">
            Sobre
          </li>
          <li onClick={handleClickNav}>Projetos</li>
          <li onClick={handleClickNav}>Certificações</li>
          <li onClick={handleClickNav}>Habilidades</li>
        </div>
      </ul>
    </Container>
  );
}

NavMobile.propTypes = {
  handle: PropTypes.func,
};
