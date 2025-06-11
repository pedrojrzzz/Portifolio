import React, { useEffect, useRef, useState } from "react";
import { Container } from "./styled";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

export default function NavMobile({ handle }) {
  const { currentColorConfig } = useSelector((state) => state.theme);
  const [positionTabSelected, setPositionTabSelected] = useState(null);
  const [largura, setLargura] = useState(null);
  let currentTargetRef = useRef(null);

  useEffect(() => {
    setPositionTabSelected(currentTargetRef.current.offsetLeft);
  }, [currentTargetRef, currentTargetRef.current?.offsetLeft]);

  const handleClickNav = (event) => {
    currentTargetRef.current.classList.remove("active"); // Removing class of the previous element
    currentTargetRef.current = event.target; // Reassing
    currentTargetRef.current.classList.add("active"); // Adding class of the current element
    setPositionTabSelected(currentTargetRef.current?.offsetLeft);
    setLargura(currentTargetRef.current?.getBoundingClientRect().width);
    handle(event);
  };
  return (
    <Container colorConfig={currentColorConfig} positionTabSelected={positionTabSelected} largura={largura}>
      <ul>
        {/* <div className="back"></div> */}
        <li onClick={handleClickNav} ref={currentTargetRef} className="active">
          Sobre
        </li>
        <li onClick={handleClickNav}>Projetos</li>
        <li onClick={handleClickNav}>Certificações</li>
        <li onClick={handleClickNav}>Habilidades</li>
      </ul>
    </Container>
  );
}

NavMobile.propTypes = {
  handle: PropTypes.func,
};
