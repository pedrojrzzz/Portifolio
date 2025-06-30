import React, { useState, useRef, lazy } from "react";
import { useSelector } from "react-redux";
import {
  DivContainer,
  ProfileImageContainer,
  PersonalInfo,
  SocialMedia,
  NavContainer,
  ContentContainer,
} from "./styled";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import IconSocialMedia from "../Icons/IconSocialMedia";
import { useScreenWidth } from "../../hooks/windowSize";
import NavMobile from "../NavMobile/NavMobile";
import perfil from "../../assets/images/perfil.jpg";

// Meus componentes lazy
const AboutContentComponent = lazy(() => import("../../content/About"));
const ProjectContentComponent = lazy(() => import("../../content/Project"));
const CertificationContentComponent = lazy(() => import("../../content/Certification"));
const SkillContentComponent = lazy(() => import("../../content/Skill"));

let positionTab = "15px";

export default function MainContainer() {
  const { currentColorConfig } = useSelector((state) => state.theme);
  const [currentTitleContent, setCurrentTitleContent] = useState("Sobre");
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
        break;

      default:
        break;
    }
  };

  const screenWidth = useScreenWidth();
  return (
    <DivContainer colorConfig={currentColorConfig}>
      {/**          PERSONAL - INFO            */}
      <ProfileImageContainer colorConfig={currentColorConfig}>
        <div className="profile-image">
          <img src={perfil} alt="perfil" />
        </div>
      </ProfileImageContainer>

      <PersonalInfo colorConfig={currentColorConfig}>
        <div className="name">
          <p>Pedro Fortunato</p>
        </div>

        <SocialMedia>
          <div className="social-media">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Link to="https://github.com/pedrojrzzz" target="_blank" style={{ textDecoration: "none" }}>
                <IconSocialMedia icon={"github"} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Link
                to="https://linkedin.com/in/pedro-fortunato-3780371b5"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <IconSocialMedia icon={"linkedin"} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Link
                to="mailto:pedro_alv12@hotmail.com?subject=Contato%20via%20portifólio"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <IconSocialMedia icon={"email"} />
              </Link>
            </motion.div>
          </div>
        </SocialMedia>
      </PersonalInfo>
      {screenWidth > 1024 ? (
        <NavContainer colorConfig={currentColorConfig} position={positionTab}>
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
        </NavContainer>
      ) : (
        <NavMobile handle={handleContent} />
      )}

      {/**        CONTENT       **/}
      <ContentContainer colorConfig={currentColorConfig}>
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
      </ContentContainer>
    </DivContainer>
  );
}
