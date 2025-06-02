import React from "react";
//import { useSelector } from "react-redux";
import SkillCard from "../components/SkillCard/SkillCard";

import { IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

const technologies = [
  {
    id: 1,
    title: "JavaScript",
    textDescription:
      "Com JavaScript, desenvolvo interfaces interativas e dinâmicas para a web, utilizando recursos modernos da linguagem como funções assíncronas, manipulação de eventos e estruturas modulares. Tenho experiência comframeworks como React e bibliotecas como Redux e Zustand para construir aplicações escaláveis e de altaperformance.",
    children: <IoLogoJavascript size={27} color="yellow" className="icon-icon" />,
    sideColor: "linear-gradient(to bottom, #F7DF1E, #F0C000)",
  },

  {
    id: 2,
    title: "React",
    textDescription:
      "Com React, desenvolvo interfaces dinâmicas e responsivas utilizando componentes reutilizáveis. Utilizo hooks como useState, useEffect e useContext para gerenciar o estado, além de aplicar o Redux para fluxos de dados mais complexos. Tenho experiência com React Router e foco em performance e organização do código.",
    children: <FaReact size={27} color="#61DAFB" className="icon-icon" />,
    sideColor: "linear-gradient(to bottom, #61DAFB, #21A1C4)",
  },

  {
    id: 3,
    title: "TypeScript",
    textDescription:
      "Com TypeScript, adiciono tipagem estática ao código JavaScript, o que permite detectar erros em tempo de desenvolvimento e melhorar a legibilidade do código. Utilizo interfaces, tipos genéricos e enums para construir aplicações robustas e seguras. Além de potencializar validações e refatorações mais seguras.",
    children: <SiTypescript size={25} color="#3178C6" className="icon-icon" />,
    sideColor: "linear-gradient(to bottom, #3178C6, #235A97)",
  },

  {
    id: 4,
    title: "Node",
    textDescription:
      "Com Node.js, desenvolvo aplicações backend rápidas e escaláveis utilizando JavaScript no lado do servidor. Tenho experiência com frameworks como Express para criação de APIs RESTful, além de trabalhar com middleware, autenticação, rotas e integração com bancos de dados.",
    children: <FaNodeJs size={27} color="#339933" className="icon-icon" />,
    sideColor: "linear-gradient(to bottom, #339933, #2A7C2A)",
  },
];

export default function SkillContentComponent() {
  //const { currentColorConfig } = useSelector((state) => state.theme);
  return (
    <div style={{ display: "flex", flexDirection: "row", columnGap: "56px", rowGap: "30px", flexWrap: "wrap" }}>
      {technologies.map((item) => (
        <SkillCard technologies={item} key={item.id} />
      ))}
    </div>
  );
}
