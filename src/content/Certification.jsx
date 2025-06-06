import React from "react";
import { useSelector } from "react-redux";
import CardCertification from "../components/CardCertification/CardCertification";
import certHardwareFundations from "../assets/images/certificate-hardware-fundations.png";
import certOperatingSystemsBasics from "../assets/images/certificate-operating-systems-basics.png";

export default function CertificationContentComponent() {
  const { currentColorConfig } = useSelector((state) => state.theme);
  const certifications = [
    {
      id: 1,
      title: "Fundamentos do Hardaware do Computador",
      plataform: "Cisco Networking Academy",
      date: "26 Fevereiro 2025",
      image: certHardwareFundations,
    },

    {
      id: 2,
      title: "Operating Systems Basics",
      plataform: "Cisco Networking Academy",
      date: "05 Junho 2025",
      image: certOperatingSystemsBasics,
    },
  ];
  return (
    <div>
      {certifications.map((item) => {
        return <CardCertification colorConfig={currentColorConfig} key={item.id} certification={item} />;
      })}

      {/* <CardCertification colorConfig={currentColorConfig} />
      <CardCertification colorConfig={currentColorConfig} />
      <CardCertification colorConfig={currentColorConfig} />
      <CardCertification colorConfig={currentColorConfig} /> */}
    </div>
  );
}
