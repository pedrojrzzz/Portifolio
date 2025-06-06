/* eslint-disable react/prop-types */
import React from "react";
import { useSelector } from "react-redux";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { DivContainer } from "./styled";

export default function IconSocialMedia({ icon }) {
  const { currentColorConfig } = useSelector((state) => state.theme);
  const icons = {
    github: <FiGithub color={currentColorConfig.iconColor} size={25} />,
    linkedin: <FiLinkedin color={currentColorConfig.iconColor} size={23} />,
    email: <FiMail color={currentColorConfig.iconColor} size={23} />,
  };

  const iconsTextSizeContainer = {
    github: "100px",
    linkedin: "120px",
    email: "90px",
  };
  const text = icon.replace(icon?.charAt(0), icon?.charAt(0).toUpperCase());

  return (
    <DivContainer colorConfig={currentColorConfig} textSizeContainer={iconsTextSizeContainer[icon]}>
      <div className="icon-container">{icons[icon] || null}</div>

      <div className="text-container">
        <p>{text}</p>
      </div>
    </DivContainer>
  );
}
