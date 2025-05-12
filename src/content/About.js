/* eslint-disable react/prop-types */
import React from "react";
import { Paragraph } from "./styled";
import { useSelector } from "react-redux";

export default function AboutContentComponent() {
  const { currentColorConfig } = useSelector((state) => state.theme);
  return (
    <div>
      <Paragraph colorConfig={currentColorConfig}>
        <p>Oi! Eu sou o Pedro Sou estudante de Tecnologia da Informação e apaixonado por tudo que envolve tecnologia</p>
      </Paragraph>

      <Paragraph colorConfig={currentColorConfig}>
        — desde programação até redes e hardware. Entrei nesse mundo há cerca de dois anos, quando comecei a aprender
        programação web por conta própria. Desde então, venho estudando, praticando e desenvolvendo projetos para
        colocar em prática tudo o que aprendo.
      </Paragraph>

      <Paragraph colorConfig={currentColorConfig}>
        Hoje estou focado em desenvolvimento frontend, criando interfaces que sejam não só bonitas, mas também
        funcionais e agradáveis de usar. Tenho alguns projetos no meu portfólio que mostram um pouco do meu estilo e da
        minha evolução como desenvolvedor. Mas meu objetivo vai além: quero aprender outras linguagens e explorar mais
        áreas dentro da programação.
      </Paragraph>

      <Paragraph colorConfig={currentColorConfig}>
        Além do desenvolvimento, também venho estudando redes de computadores. Tenho conhecimentos em configuração de
        roteadores, sub-redes, endereçamento IPv4 e IPv6, além de entender o funcionamento dos principais protocolos de
        rede. Isso me ajuda a enxergar melhor como tudo se conecta por trás dos bastidores.
      </Paragraph>

      <Paragraph colorConfig={currentColorConfig}>
        Outra área que gosto bastante é hardware. Gosto de entender como os computadores funcionam por dentro, montar e
        configurar máquinas, o que complementa bem minha formação técnica. Sou movido pela curiosidade, pelo desafio de
        aprender coisas novas e pela vontade de transformar ideias em soluções que realmente façam a diferença. Estou
        sempre buscando crescer, aprender e compartilhar o que sei.
      </Paragraph>
    </div>
  );
}
