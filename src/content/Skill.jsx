import React from "react";
//import { useSelector } from "react-redux";
import SkillCard from "../components/SkillCard/SkillCard";

import { IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaDocker, FaGitAlt, FaGithub, FaWindows } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

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
      "Tenho experiência no desenvolvimento de aplicações backend escaláveis utilizando Node.js e JavaScript no lado do servidor. Trabalho com frameworks como Express para criação de APIs RESTful, integrando bancos de dados e aplicando boas práticas de arquitetura de software, com foco em escalabilidade, manutenibilidade e performance.",
    children: <FaNodeJs size={27} color="#339933" className="icon-icon" />,
    sideColor: "linear-gradient(to bottom, #339933, #2A7C2A)",
  },

  {
    id: 5,
    title: "CSS",
    textDescription:
      "Com CSS3, sou capaz de estilizar páginas web para torná-las mais atraentes, responsivas e funcionais em diferentes dispositivos. Sempre aplico boas práticas de design visual e foco na experiência do usuário (UX), garantindo interfaces intuitivas, acessíveis e agradáveis de navegar.",
    children: <FaCss3Alt size={27} color="#098dcc" className="icon-icon" />,
    sideColor: "linear-gradient(to bottom, #098dcc, #096b99)",
  },

  {
    id: 6,
    title: "HTMl",
    textDescription:
      "Com HTML5, consigo organizar e dar sentido às páginas de forma clara e semântica. Isso não só melhora a experiência de quem navega (UX), deixando tudo mais acessível e fácil de entender, como também ajuda os motores de busca a encontrarem e entenderem melhor o conteúdo, contribuindo para um bom posicionamento nas buscas.",
    children: <FaHtml5 size={27} color="#f16529" className="icon-icon" />,
    sideColor: "linear-gradient(to bottom, #f16529, #d85923)",
  },

  {
    id: 7,
    title: "Tailwind",
    textDescription:
      "Com Tailwind, consigo criar interfaces modernas e responsivas, mantendo um código limpo e fácil de entender, para que qualquer desenvolvedor possa trabalhar no projeto sem dificuldades. Além disso, a ferramenta me ajuda a economizar muito tempo no desenvolvimento.",
    children: <RiTailwindCssFill size={27} color="#38bdf8" className="icon-icon" />,
    sideColor: "linear-gradient(to bottom, #38bdf8, #2d9fcf)",
  },

  {
    id: 8,
    title: "Docker",
    textDescription:
      "Com Docker, consigo criar um ambiente de desenvolvimento que funciona igualzinho em qualquer lugar — sem aquelas dores de cabeça de 'na minha máquina funciona'. Ele me ajuda a organizar tudo o que a aplicação precisa em um contêiner só, facilitando o trabalho na hora de colocar no ar. Fica tudo mais prático e rápido.",
    children: <FaDocker size={27} color="#119fed" />,
    sideColor: "linear-gradient(to bottom, #119fed, #0f6594)",
  },

  {
    id: 9,
    title: "Git",
    textDescription:
      "Com Git, consigo otimizar o desenvolvimento dos meus softwares através do versionamento de código. Ele é especialmente útil quando quero testar novas ideias sem prejudicar o projeto original. Além disso, facilita muito o trabalho em equipe, mantendo todo o histórico de modificações bem organizado e documentado.",
    children: <FaGitAlt size={27} color="#f1563a" />,
    sideColor: "linear-gradient(to bottom, #f1563a, #a53d2b)",
  },

  {
    id: 10,
    title: "GitHub",
    textDescription:
      "Com o GitHub, consigo armazenar e organizar os códigos dos meus projetos usando o sistema de versionamento Git. A plataforma é muito útil tanto para contribuir com projetos open source quanto para divulgar meus próprios projetos pessoais de forma prática e profissional.",
    children: <FaGithub size={27} color="#ffffff" />,
    sideColor: "linear-gradient(to bottom, #ffffff, #ffffffda)",
  },

  {
    id: 11,
    title: "Windows",
    textDescription: "Com o Windows, consigo instalar e utilizar diversos tipos de softwares para diferentes finalidades. Também sei utilizar as ferramentas nativas do sistema para monitorar o uso da CPU, GPU e rede. Mantenho o sistema sempre atualizado, configuro redes conforme necessário e utilizo os recursos de segurança oferecidos pelo próprio Windows",
    children: <FaWindows size={27} color="#0078D4"/>,
    sideColor: "linear-gradient(to bottom, #0078D4, #0163ad)",
  }
];
export default function SkillContentComponent() {
  return (
    <div style={{ display: "flex", flexDirection: "row", columnGap: "56px", rowGap: "30px", flexWrap: "wrap" }}>
      {technologies.map((item) => (
        <SkillCard technologies={item} key={item.id} />
      ))}
    </div>
  );
}
