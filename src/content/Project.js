import React from "react";
import img from "../assets/images/bg-4.png";
import img1 from "../assets/images/bg-2.png";
import img2 from "../assets/images/bg-3.png";
import img3 from "../assets/images/bg-4.png";
import { Card } from "../components/Card/Card";

const projects = [
  {
    id: 1,
    title: "Projeto Agenda",
    description:
      "O EcoLuz é um projeto voltado à instalação de sistemas de iluminação pública sustentáveis em comunidades de baixa renda, utilizando energia solar. A iniciativa busca reduzir custos com eletricidade, aumentar a segurança noturna e promover o uso de fontes renováveis. O projeto envolve a capacitação de moradores locais para manutenção dos sistemas, incentivando o desenvolvimento comunitário e a geração de renda.",
    thumbnail: img,
    images: [img, img1, img2, img3],
    repository: "https://github.com/pedrojrzzz/projeto-agenda",
    websiteDemo: "https://pedrojrzzz.github.io/projeto-agenda/",
  },

  {
    id: 2,
    title: "Projeto Login",
    description:
      "O EcoLuz é um projeto voltado à instalação de sistemas de iluminação pública sustentáveis em comunidades de baixa renda, utilizando energia solar. A iniciativa busca reduzir custos com eletricidade, aumentar a segurança noturna e promover o uso de fontes renováveis. O projeto envolve a capacitação de moradores locais para manutenção dos sistemas, incentivando o desenvolvimento comunitário e a geração de renda.",
    thumbnail: img2,
    images: [img, img1, img2, img3],
    repository: "",
    websiteDemo: "",
  },

  {
    id: 3,
    title: "Student Admin Project",
    description:
      "O EcoLuz é um projeto voltado à instalação de sistemas de iluminação pública sustentáveis em comunidades de baixa renda, utilizando energia solar. A iniciativa busca reduzir custos com eletricidade, aumentar a segurança noturna e promover o uso de fontes renováveis. O projeto envolve a capacitação de moradores locais para manutenção dos sistemas, incentivando o desenvolvimento comunitário e a geração de renda.",
    thumbnail: img3,
    images: [img, img1, img2, img3],
    repository: "",
    websiteDemo: "",
  },
];
console.log(projects[0]);
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
