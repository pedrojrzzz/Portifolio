import React from "react";
import { useSelector } from "react-redux";
import { DivContainer, LinkedinIcon, GithubIcon, EmailIcon } from "./styled";

export default function MainContainer() {
  const { currentColorConfig } = useSelector((state) => state.theme);
  let lastElementClicked = null;

  const handleClick = (event) => {
    lastElementClicked
      ? lastElementClicked.classList.remove("active")
      : (lastElementClicked = null);
    const clickedElement = event.target;
    lastElementClicked = clickedElement;
    clickedElement.classList.add("active");
  };

  return (
    <DivContainer colorConfig={currentColorConfig}>
      <div className="profile-image-container">
        <div className="profile-image"></div>
      </div>

      <div className="personal-info">
        <div className="name">
          <p>Pedro Fortunato</p>
        </div>
        <div className="social-media">
          <div className="github-container">
            <GithubIcon colorConfig={currentColorConfig} />
          </div>

          <div className="linkedin-container">
            <LinkedinIcon />
          </div>

          <div className="email-container">
            <EmailIcon colorConfig={currentColorConfig} />
          </div>
        </div>
      </div>

      <div className="nav-container">
        <ul>
          <li onClick={handleClick}>Sobre</li>
          <li onClick={handleClick}>Projetos</li>
          <li onClick={handleClick}>Certificações</li>
          <li onClick={handleClick}>Habilidades</li>
        </ul>
      </div>
      <div className="content-container">
        <div className="title-container">
          <h2>Sobre</h2>
        </div>
      </div>
    </DivContainer>
  );
}
