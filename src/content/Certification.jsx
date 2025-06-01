import React from "react";
import { useSelector } from "react-redux";
import { Paragraph } from "./styled";
import CardCertification from "../components/CardCertification/CardCertification";

export default function CertificationContentComponent() {
  const { currentColorConfig } = useSelector((state) => state.theme);
  return (
    <div>

    
    <CardCertification colorConfig={currentColorConfig} />
    <CardCertification colorConfig={currentColorConfig} />
    <CardCertification colorConfig={currentColorConfig} />
    <CardCertification colorConfig={currentColorConfig} />
    </div>
  );
}
