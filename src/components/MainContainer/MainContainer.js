import React, { useState, useRef, lazy } from "react";
import { useSelector } from "react-redux";
import { DivContainer, LinkedinIcon, GithubIcon, EmailIcon } from "./styled";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";

// Meus componentes lazy
const AboutContentComponent = lazy(() => import("../../content/About"));
const ProjectContentComponent = lazy(() => import("../../content/Project"));
const CertificationContentComponent = lazy(() => import("../../content/Certification"));
const SkillContentComponent = lazy(() => import("../../content/Skill"));

let positionTab = "15px";

export default function MainContainer() {
  const { currentColorConfig } = useSelector((state) => state.theme);
  const [currentTitleContent, setCurrentTitleContent] = useState("Sobre");
  const [selected, setSelected] = useState("sobre");
  const contents = {
    Sobre: AboutContentComponent,
    Projetos: ProjectContentComponent,
    Certificações: CertificationContentComponent,
    Habilidades: SkillContentComponent,
  };

  let CurrentComponent = contents[currentTitleContent];
  let previousTargetRef = useRef(null);

  // Removing the hover effect in link nav, when clicked in other link nav
  const handleClick = (event) => {
    previousTargetRef.current
      ? previousTargetRef.current.classList.remove("active")
      : previousTargetRef.current?.classList.remove("active");
    const clickedElement = event.target;
    previousTargetRef.current = clickedElement;
    clickedElement.classList.add("active");
    positionTab = clickedElement.offsetTop + "px";
    handleContent(event);
  };

  const handleContent = (event) => {
    const elementClicked = event.target.textContent;

    switch (elementClicked) {
      case "Sobre":
        setCurrentTitleContent("Sobre");
        CurrentComponent = contents[currentTitleContent];
        break;

      case "Projetos":
        setCurrentTitleContent("Projetos");
        CurrentComponent = contents[currentTitleContent];
        break;

      case "Certificações":
        setCurrentTitleContent("Certificações");
        CurrentComponent = contents[currentTitleContent];
        break;

      case "Habilidades":
        setCurrentTitleContent("Habilidades");
        CurrentComponent = contents[currentTitleContent];
    }
  };

  return (
    <DivContainer colorConfig={currentColorConfig} position={positionTab}>
      <div className="profile-image-container">
        <div className="profile-image"></div>
      </div>

      <div className="personal-info">
        <div className="name">
          <p>Pedro Fortunato</p>
        </div>

        {/**        SOCIAL-MEDIA       **/}
        <div className="social-media">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="github-container"
          >
            <Link to="https://github.com/pedrojrzzz" target="_blank">
              <GithubIcon colorConfig={currentColorConfig} href={"https://github.com/pedrojrzzz"} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="linkedin-container"
          >
            <LinkedinIcon />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="email-container"
          >
            <EmailIcon colorConfig={currentColorConfig} />
          </motion.div>
        </div>
      </div>

      {/**        NAV       **/}

      <div className="nav-container">
        <ul>
          <div>
            <div className="back"></div>
            <li onClick={handleClick} className="active" ref={previousTargetRef}>
              Sobre
            </li>
            <li onClick={handleClick}>Projetos</li>
            <li onClick={handleClick}>Certificações</li>
            <li onClick={handleClick}>Habilidades</li>
          </div>
        </ul>
      </div>

      {/**        CONTENT       **/}
      <div className="content-container">
        <div className="title-container">
          <h2>{currentTitleContent}</h2>
        </div>

        <AnimatePresence mode="wait">
          {CurrentComponent && (
            <motion.div
              key={currentTitleContent}
              initial={{ opacity: 0, transition: { duration: 10 } }}
              animate={{ opacity: 1 }}
              exit={{ filter: "blur(2px)", transition: { duration: 0.3, ease: "easeInOut" }, x: 450, opacity: 0 }}
              className="content"
            >
              <CurrentComponent style={{ opacity: 0 }} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </DivContainer>
  );
}
