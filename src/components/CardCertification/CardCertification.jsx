import React, { useRef } from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import {
  Container,
  DivImage,
  ContainerInfo,
  DivTitle,
  DivPlatform,
  DivDate,
  DivButtons,
  ExpandIcon,
  ModalImage,
  CloseIcon,
} from "./styled";
//import certification from "../../assets/images/certificate-hardware-fundations.png";
import PropTypes from "prop-types";

export default function CardCertification({ certification }) {
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
        <img src={certification.image} alt={`Certificado ${certification.title}`} />
      </DivImage>

      <ContainerInfo>
        <p className="paragraph-certificate">CERTIFICADO</p>

        <DivTitle colorConfig={currentColorConfig}>
          <h3>{certification.title}</h3>
        </DivTitle>

        <DivPlatform colorConfig={currentColorConfig}>
          <p>{certification.plataform}</p>
        </DivPlatform>

        <DivDate colorConfig={currentColorConfig}>
          <p>{certification.date}</p>
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
                <img src={certification.image} />
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

CardCertification.propTypes = {
  certification: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    plataform: PropTypes.string,
    date: PropTypes.string,
    image: PropTypes.string,
  }),
};
