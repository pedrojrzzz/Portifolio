import React from "react";
import { useSelector } from "react-redux";
import { Paragraph } from "./styled";

export default function SkillContentComponent() {
  const { currentColorConfig } = useSelector((state) => state.theme);
  return (
    <Paragraph colorConfig={currentColorConfig}>
      No meio de uma tarde nublada, uma borboleta azul pousou na borda de uma xícara de café esquecida no parapeito da
      janela. Lá dentro, o tempo parecia ter parado. O relógio marcava 3:33 e não fazia questão de avançar. Cada segundo
      era uma eternidade suspensa entre o “e se” e o “por que não”. No rádio antigo, tocava uma música que ninguém mais
      conhecia, mas que parecia feita exatamente para aquele momento. Um gato preto espreguiçava-se no sofá, indiferente
      às inquietações humanas. E lá fora, o vento carregava segredos de outras janelas, outras vidas, outras histórias
      que talvez nunca se cruzem… ou talvez sim. Porque o mundo gira, às vezes devagar, às vezes sem aviso — e tudo muda
      no piscar de um pensamento.
    </Paragraph>
  );
}
