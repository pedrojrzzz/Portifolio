import React from "react";
import { useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import MainContainer from "../../components/MainContainer/MainContainer";
import { ContainerBody } from "./styled";

export default function Home() {
  const { currentColorConfig } = useSelector((state) => state.theme);
  return (
    <ContainerBody colorConfig={currentColorConfig}>
      <Header />
      <MainContainer />
    </ContainerBody>
  );
}
