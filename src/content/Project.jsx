import React from "react";
import img from "../assets/images/bg-4.png";
import img1 from "../assets/images/bg-2.png";
import img2 from "../assets/images/bg-3.png";
import { Card } from "../components/Card/Card";
import { sapImages } from "../assets/images/sap-images/sap-images";
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
    websiteDemo: "https://pedrojrzzz.github.io/projeto-agenda/",
    technologiesUsed: [
      <IoLogoJavascript size={30} color="#F7DF1E" key="javascript" />,
      <FaReact size={30} color="#61DAFB" key="react" className="my-anchor-element" />,
      <SiRedux size={30} color="#764ABC" key="redux" className="my-anchor-element" />,
      <FaNodeJs size={30} color="#84BF08" key="nodejs" />,
      <SiSequelize size={30} color="#08b3eb" key="sequelize" />,
      <SiMariadb size={30} color="#c0765a" key="mariadb" />,
    ],
  },

  {
    id: 2,
    title: "Projeto Login",
    description: [
      "O EcoLuz é um projeto voltado à instalação de sistemas de iluminação pública sustentáveis em comunidades de baixa renda, utilizando energia solar. A iniciativa busca reduzir custos com eletricidade, aumentar a segurança noturna e promover o uso de fontes renováveis. O projeto envolve a capacitação de moradores locais para manutenção dos sistemas, incentivando o desenvolvimento comunitário e a geração de renda.",
    ],
    shortDescription:
      "O EcoLuz é um projeto voltado à instalação de sistemas de iluminação pública sustentáveis em comunidades de baixa renda, utilizando energia solar. A iniciativa busca reduzir custos com eletricidade, aumentar a segurança noturna e promover o uso de fontes renováveis. O projeto envolve a capacitação de moradores locais para manutenção dos sistemas, incentivando o desenvolvimento comunitário e a geração de renda.",
    thumbnail: img2,
    images: [img, img1, img2, img],
    repository: "",
    websiteDemo: "",
  },

  {
    id: 3,
    title: "Student Admin Project",
    description: [
      "O EcoLuz é um projeto voltado à instalação de sistemas de iluminação pública sustentáveis em comunidades de baixa renda, utilizando energia solar. A iniciativa busca reduzir custos com eletricidade, aumentar a segurança noturna e promover o uso de fontes renováveis. O projeto envolve a capacitação de moradores locais para manutenção dos sistemas, incentivando o desenvolvimento comunitário e a geração de renda.",
    ],
    shortDescription:
      "O EcoLuz é um projeto voltado à instalação de sistemas de iluminação pública sustentáveis em comunidades de baixa renda, utilizando energia solar. A iniciativa busca reduzir custos com eletricidade, aumentar a segurança noturna e promover o uso de fontes renováveis. O projeto envolve a capacitação de moradores locais para manutenção dos sistemas, incentivando o desenvolvimento comunitário e a geração de renda.",
    thumbnail: img,
    images: [img, img1, img2, img],
    repository: "",
    websiteDemo: "",
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
