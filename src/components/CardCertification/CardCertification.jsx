import React, { useRef } from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import {
  Container,
  DivImage,
  ContainerInfo,
  DivTitle,
  DivDate,
  DivButtons,
  ExpandIcon,
  ModalImage,
  CloseIcon,
} from "./styled";
import certification from "../../assets/images/certificate-hardware-fundations.png";

export default function CardCertification() {
  const { currentColorConfig } = useSelector((state) => state.theme);
  const modalRef = useRef(null);

  const handleOpenModal = () => {
    modalRef.current.showModal();
  };

  const handleCloseModal = () => {
    modalRef.current.close();
  };

  return (
    <Container colorConfig={currentColorConfig}>
      <DivImage>
        <img src={certification} alt="" />
      </DivImage>

      <ContainerInfo>
        <p className="paragraph-certificate">CERTIFICADO</p>

        <DivTitle colorConfig={currentColorConfig}>
          <h3>Fundamentos do Hardaware do Computador</h3>
        </DivTitle>

        <DivDate colorConfig={currentColorConfig}>
          <p>Cisco Networking Academy</p>
          <p>26 Fevereiro 2025</p>
        </DivDate>

        <DivButtons colorConfig={currentColorConfig}>
          <button onClick={handleOpenModal}>
            <ExpandIcon colorConfig={currentColorConfig} size={20} />
            <span>Expandir certificado</span>
          </button>
        </DivButtons>

        {createPortal(
          <div>
            <ModalImage colorConfig={currentColorConfig} ref={modalRef}>
              <div className="header-modal">
                <CloseIcon colorConfig={currentColorConfig} size={30} onClick={handleCloseModal} />
              </div>
              <div className="container-image">
                <img src={certification} />
              </div>
            </ModalImage>
          </div>,
          // eslint-disable-next-line no-undef
          document.body
        )}
      </ContainerInfo>
    </Container>
  );
}
