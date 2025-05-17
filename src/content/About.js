/* eslint-disable react/prop-types */
import React from "react";
import { Paragraph } from "./styled";
import { useSelector } from "react-redux";

export default function AboutContentComponent() {
  const { currentColorConfig } = useSelector((state) => state.theme);
  return (
    <div>
      <Paragraph colorConfig={currentColorConfig}>
        <p>
          <strong className="emphasis">Oi! Eu sou o Pedro</strong> Sou estudante de{" "}
          <strong className="emphasis">Tecnologia da Informação</strong> e apaixonado por tudo que envolve tecnologia
          desde programação até redes e hardware.
        </p>
      </Paragraph>

      <Paragraph colorConfig={currentColorConfig}>
        <strong className="emphasis">
          Entrei nesse mundo há cerca de dois anos, quando comecei a aprender programação web por conta própria
        </strong>
        . Desde então, venho estudando, praticando e desenvolvendo projetos para colocar em prática tudo o que aprendo.
      </Paragraph>

      <Paragraph colorConfig={currentColorConfig}>
        Hoje estou focado em desenvolvimento frontend, criando interfaces que sejam não só bonitas, mas também
        funcionais e agradáveis de usar. Tenho alguns projetos no meu portfólio que mostram um pouco do meu estilo e da
        minha evolução como desenvolvedor.{" "}
        <strong className="emphasis">
          Mas meu objetivo vai além: quero aprender outras linguagens e explorar mais áreas dentro da programação.
        </strong>
      </Paragraph>

      <Paragraph colorConfig={currentColorConfig}>
        Além do desenvolvimento, também venho estudando redes de computadores.{" "}
        <strong className="emphasis">
          Tenho conhecimentos em configuração de roteadores, sub-redes, endereçamento IPv4 e IPv6
        </strong>
        , além de entender o funcionamento dos principais protocolos de rede. Isso me ajuda a enxergar melhor como tudo
        se conecta por trás das telas.
      </Paragraph>

      <Paragraph colorConfig={currentColorConfig}>
        <strong className="emphasis">
          Outra área que gosto bastante é hardware. Gosto de entender como os computadores funcionam por dentro, montar
          e configurar máquinas, o que complementa bem minha formação técnica.
        </strong>{" "}
        Sou movido pela curiosidade, pelo desafio de aprender coisas novas e pela vontade de transformar ideias em
        soluções que realmente façam a diferença. Estou sempre buscando crescer, aprender e compartilhar o que sei.
      </Paragraph>
    </div>
  );
}
