import React from "react";
import { Card } from "../components/Card/Card";
import { sapImages } from "../assets/images/sap-images/sap-images";
import { portifolioImages } from "../assets/images/portifolio-project/portifolio-images";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiRedux, SiSequelize, SiMariadb } from "react-icons/si";

const projects = [
  {
    id: 1,
    title: "Student Admin Portal",
    description: [
      "O Student Admin Portal é um sistema web completo para gerenciamento de alunos, com uma interface front-end responsiva e intuitiva, e um back-end robusto baseado em uma API REST, estruturada pela arquitetura MVC.",
      "O sistema conta com autenticação de usuários por meio de JWT (JSON Web Token), rotas protegidas e integração com um banco de dados SQL (MariaDB), utilizando o Sequelize como ORM para simplificar a comunicação com o banco de dados.",
      "Todo o front-end quanto o back-end foram desenvolvidos integralmente por mim, sem a utilização de templates prontos, qualquer código copiado de tutoriais, vídeos no YouTube ou cursos. Essa abordagem autonoma foi que me permitiu desenvolver uma base sólida técnica das tecnologias utilizadas, além de melhorar significativamente minhas habilidades em resolução de problemas, depuração de bugs e tomada de decisões de arquitetura de software.",
    ],
    shortDescription:
      "O Student Admin Portal é um sistema web completo para gerenciamento de alunos, com uma interface front-end responsiva e intuitiva, e um back-end robusto baseado em uma API REST, estruturada pela arquitetura MVC. O projeto inclui autenticação segura com JWT, rotas protegidas e integração eficiente com o banco de dados MariaDB. Desenvolvido inteiramente do zero, sem uso de templates ou códigos prontos.",
    thumbnail: sapImages.tableStudents,
    images: [
      sapImages.tableStudents,
      sapImages.sapImgFormAddStudentsEmpty,
      sapImages.sapImgFormAddStudents,
      sapImages.tableEditStudent,
      sapImages.sapImgLogin,
    ],
    repository: "https://github.com/pedrojrzzz/Student-Admin-Portal-FrontEnd",
    websiteDemo: "https://student-admin-project.netlify.app/",
    technologiesUsed: [
      <IoLogoJavascript size={30} color="#F7DF1E" key="javascript" />,
      <FaReact size={30} color="#61DAFB" key="react" className="my-anchor-element" />,
      <SiRedux size={30} color="#764ABC" key="redux" className="my-anchor-element" />,
      <FaNodeJs size={30} color="#84BF08" key="nodejs" />,
      <SiSequelize size={30} color="#08b3eb" key="sequelize" />,
      <SiMariadb size={30} color="#c0765a" key="mariadb" />,
    ],
  },
  // {
  //   id: 2,
  //   title: "Projeto Login",
  //   description: [
  //     "O projeto Login é um sistema de login completo, aonde o usuário fornece os dados para o registro e é enviado um e-mail com um código para ele confirmar, todo o modelo foi desenvolvido como API Rest arquitetura MVC",
  //     "testes",
  //     "teste",
  //   ],
  //   shortDescription:
  //     "O EcoLuz é um projeto voltado à instalação de sistemas de iluminação pública sustentáveis em comunidades de baixa renda, utilizando energia solar. A iniciativa busca reduzir custos com eletricidade, aumentar a segurança noturna e promover o uso de fontes renováveis. O projeto envolve a capacitação de moradores locais para manutenção dos sistemas, incentivando o desenvolvimento comunitário e a geração de renda.",
  //   thumbnail: img2,
  //   images: [img, img1, img2, img],
  //   repository: "",
  //   websiteDemo: "aa",
  //   technologiesUsed: [
  //     <IoLogoJavascript size={30} color="#F7DF1E" key="javascript" />,
  //     <FaReact size={30} color="#61DAFB" key="react" className="my-anchor-element" />,
  //     <SiRedux size={30} color="#764ABC" key="redux" className="my-anchor-element" />,
  //     <FaNodeJs size={30} color="#84BF08" key="nodejs" />,
  //     <SiSequelize size={30} color="#08b3eb" key="sequelize" />,
  //     <SiMariadb size={30} color="#c0765a" key="mariadb" />,
  //   ],
  // },

  {
    id: 3,
    title: "Portifólio",
    description: [
      "Sim, este portfólio também faz parte dos meus projetos. Trata-se de uma aplicação do tipo Single Page Application (SPA), com deploy realizado na plataforma Netlify.",
      "O layout é totalmente responsivo, adaptando-se perfeitamente a qualquer tipo de dispositivo, seja desktop, tablet ou smartphone. Neste projeto, além de me apresentar profissionalmente, demonstro minhas habilidades técnicas, minhas principais stacks e projetos desenvolvidos, servindo como uma vitrine do meu trabalho e das tecnologias que domino.",
    ],
    shortDescription:
      "Sim, este portfólio também faz parte dos meus projetos, com deploy realizado na plataforma Netlify. O design é totalmente responsivo, garantindo uma experiência otimizada em qualquer dispositivo. Neste projeto, apresento meu perfil profissional, demonstro minhas habilidades técnicas, principais stacks e projetos desenvolvidos, funcionando como uma vitrine do meu trabalho e das tecnologias que domino.",
    thumbnail: portifolioImages.thumbnail,
    images: [
      portifolioImages.about,
      portifolioImages.certifications,
      portifolioImages.projects,
      portifolioImages.projects2,
      portifolioImages.skills,
      portifolioImages.skills2,
    ],
    repository: "https://github.com/pedrojrzzz/Portifolio",
    websiteDemo: "https://pedroportifol.netlify.app/",
    technologiesUsed: [
      <IoLogoJavascript size={30} color="#F7DF1E" key="javascript" />,
      <FaReact size={30} color="#61DAFB" key="react" className="my-anchor-element" />,
      <SiRedux size={30} color="#764ABC" key="redux" className="my-anchor-element" />,
    ],
  },
];

export default function ProjectContentComponent() {
  return (
    <div>
      {projects.map((project, index) => (
        <Card key={project.id} project={project} index={index} />
      ))}
    </div>
  );
}
