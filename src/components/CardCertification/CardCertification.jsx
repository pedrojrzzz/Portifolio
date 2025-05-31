import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { Container, DivImage, ContainerInfo, DivTitle, DivDate, DivButtons, ExpandIcon } from "./styled";
import certification from "../../assets/images/certificate-hardware-fundations.png";

export default function CardCertification() {
  const { currentColorConfig } = useSelector((state) => state.theme);
  const expandContainerRef = useRef(null);

  const handleClickExpandImg = () => {
    expandContainerRef.current.classList.toggle("visble");
  };

  return (
    <Container colorConfig={currentColorConfig}>
      <DivImage onClick={handleClickExpandImg}>
        <div className="expand-container" ref={expandContainerRef}>
          <ExpandIcon colorConfig={currentColorConfig} color="black" size={50} />
        </div>
        <img src={certification} alt="" />
      </DivImage>
      <ContainerInfo>
        <span className="span-certificate">CERTIFICADO</span>
        <DivTitle colorConfig={currentColorConfig}>
          <h3>Fundamentos do Hardaware do Computador</h3>
        </DivTitle>
        <DivDate colorConfig={currentColorConfig}>
          <p style={{ fontSize: "12pt", fontWeight: "400" }}>Cisco Networking Academy</p>
          <p style={{ fontSize: "12pt", fontWeight: "400" }}>26 Fevereiro 2025</p>
        </DivDate>
        <DivButtons colorConfig={currentColorConfig}>
          <button>
            <ExpandIcon colorConfig={currentColorConfig} size={20} />
            <span>Expandir certificado</span>
          </button>
        </DivButtons>
      </ContainerInfo>
    </Container>
  );
}
