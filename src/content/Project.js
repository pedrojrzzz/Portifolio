import React from "react";
import { DivContainer } from "./styled";
import { useSelector } from "react-redux";

const projects = [
  {
    title: "Exemplo 1",
    description: "Descrição qualquer",
    thumbnail: "",
    images: ["img1", "img2", "img3"],
  },

  {
    title: "Exemplo 2",
    description: "Descrição qualquer",
    thumbnail: "",
    images: ["img1", "img2", "img3"],
  },

  {
    title: "Projeto Agenda",
    description: "Descrição qualquer",
    thumbnail: "",
    images: ["img1", "img2", "img3"],
  },
];

export default function ProjectContentComponent() {
  const { currentColorConfig } = useSelector((state) => state.theme);
  return (
    <DivContainer colorConfig={currentColorConfig}>
      {projects.map((item, index) => (
        <div key={index} className={`div-project`}>
          <div className="thumbnail"></div>

          <div className="container-images">
            {item.images.map((item, index) => (
              <div className="images" key={index}>
                {item}
              </div>
            ))}
          </div>

          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </DivContainer>
  );
}
