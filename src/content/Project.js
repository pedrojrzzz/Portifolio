import React from "react";
import { useSelector } from "react-redux";
import img from "../assets/images/bg-4.png";
import img1 from "../assets/images/bg-2.png";
import img2 from "../assets/images/bg-3.png";
import img3 from "../assets/images/bg-4.png";
import { Card } from "../components/Card/Card";

const projects = [
  {
    title: "Projeto Agenda",
    description:
      "O EcoLuz é um projeto voltado à instalação de sistemas de iluminação pública sustentáveis em comunidades de baixa renda, utilizando energia solar. A iniciativa busca reduzir custos com eletricidade, aumentar a segurança noturna e promover o uso de fontes renováveis. O projeto envolve a capacitação de moradores locais para manutenção dos sistemas, incentivando o desenvolvimento comunitário e a geração de renda.",
    thumbnail: img,
    images: [img, img1, img2, img3],
    repository: "https://github.com/pedrojrzzz/projeto-agenda",
    websiteDemo: "https://pedrojrzzz.github.io/projeto-agenda/",
  },

  {
    title: "Exemplo 2",
    description: "Descrição qualquer",
    thumbnail: img2,
    images: [img, img1, img2, img3],
    repository: "",
    websiteDemo: "",
  },

  {
    title: "Projeto Agenda",
    description: "Descrição qualquer",
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
      {/* {projects.map((item) => (
        <Card project={item} key={item} />
      ))} */}
      <Card project={projects[0]} />
    </div>
    // <DivContainer colorConfig={currentColorConfig}>
    //   {projects.map((item, index) => (
    //     <div key={index} className={`div-project`}>
    //       <div className="thumbnail">
    //         <img src={img} alt={item.title} />
    //       </div>

    //       <div className="container-images">
    //         {item.images.map((item, index) => (
    //           <div className="images" key={index} onClick={() => changeThumbnail(item, index)}>
    //             {<img src={item} alt={item.title} />}
    //           </div>
    //         ))}
    //       </div>

    //       <h2>{item.title}</h2>
    //       <p>{item.description}</p>
    //     </div>
    //   ))}
    // </DivContainer>
  );
}
