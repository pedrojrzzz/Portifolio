import React from "react";
import img from "../assets/images/bg-4.png";
import img1 from "../assets/images/bg-2.png";
import img2 from "../assets/images/bg-3.png";
//import img3 from "../assets/images/bg-4.png";
import { Card } from "../components/Card/Card";
import { sapImages } from "../assets/images/sap-images/sap-images";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiRedux } from "react-icons/si";

const projects = [
  {
    id: 1,
    title: "Student Admin Portal",
    description:
      "O EcoLuz é um projeto voltado à instalação de sistemas de iluminação pública sustentáveis em comunidades de baixa renda, utilizando energia solar. A iniciativa busca reduzir custos com eletricidade, aumentar a segurança noturna e promover o uso de fontes renováveis. O projeto envolve a capacitação de moradores locais para manutenção dos sistemas, incentivando o desenvolvimento comunitário e a geração de renda.",
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
      <FaReact size={30} color="#61DAFB" key="react" />,
      <IoLogoJavascript size={30} color="#F7DF1E" key="javascript" />,
      <SiRedux size={30} color="#764ABC" key="redux" />,
    ],
  },

  {
    id: 2,
    title: "Projeto Login",
    description:
      "O EcoLuz é um projeto voltado à instalação de sistemas de iluminação pública sustentáveis em comunidades de baixa renda, utilizando energia solar. A iniciativa busca reduzir custos com eletricidade, aumentar a segurança noturna e promover o uso de fontes renováveis. O projeto envolve a capacitação de moradores locais para manutenção dos sistemas, incentivando o desenvolvimento comunitário e a geração de renda.",
    thumbnail: img2,
    images: [img, img1, img2, img],
    repository: "",
    websiteDemo: "",
  },

  {
    id: 3,
    title: "Student Admin Project",
    description:
      "O EcoLuz é um projeto voltado à instalação de sistemas de iluminação pública sustentáveis em comunidades de baixa renda, utilizando energia solar. A iniciativa busca reduzir custos com eletricidade, aumentar a segurança noturna e promover o uso de fontes renováveis. O projeto envolve a capacitação de moradores locais para manutenção dos sistemas, incentivando o desenvolvimento comunitário e a geração de renda.",
    thumbnail: img,
    images: [img, img1, img2, img],
    repository: "",
    websiteDemo: "",
  },
];

export default function ProjectContentComponent() {
  // const { currentColorConfig } = useSelector((state) => state.theme);

  return (
    <div>
      {projects.map((project, index) => (
        <Card key={project.id} project={project} index={index} />
      ))}
    </div>
  );
}
