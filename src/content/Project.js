import React from "react";
import { DivContainer } from "./styled";
import { useSelector } from "react-redux";

const projects = [
  {
    title: "Exemplo 1",
    description: "Descrição qualquer",
  },

  {
    title: "Exemplo 2",
    description: "Descrição qualquer",
  },

  {
    title: "Exemplo 3",
    description: "Descrição qualquer",
  },

  {
    title: "Exemplo 4",
    description: "Descrição qualquer",
  },
  {
    title: "Exemplo 1",
    description: "Descrição qualquer",
  },

  {
    title: "Exemplo 2",
    description: "Descrição qualquer",
  },

  {
    title: "Exemplo 3",
    description: "Descrição qualquer",
  },

  {
    title: "Exemplo 4",
    description: "Descrição qualquer",
  },
];

export default function ProjectContentComponent() {
  const { currentColorConfig } = useSelector((state) => state.theme);
  return (
    <DivContainer colorConfig={currentColorConfig}>
      {projects.map((item, index) => (
        <div key={index} className={`div-project`}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </DivContainer>
  );
}
