import React from "react";
//import { useSelector } from "react-redux";
import SkillCard from "../components/SkillCard/SkillCard";

import { IoLogoJavascript } from "react-icons/io5";

export default function SkillContentComponent() {
  //const { currentColorConfig } = useSelector((state) => state.theme);
  return <SkillCard children={<IoLogoJavascript size={27} color="yellow" className="icon-icon" />} />;
}
