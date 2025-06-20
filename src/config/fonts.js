import { css } from "styled-components";

const RobotoFont = css`
  @import url("https://fonts.googleapis.com/css2?family=Funnel+Sans:ital,wght@0,300..800;1,300..800&family=Noto+Serif:ital,wght@0,100..900;1,100..900&family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap");
`;

export default RobotoFont;

// Config font size
export const fontSizeConfig = {
  logoFontSize: "18pt",
  linksNavFontSize: "12pt",
  titleSectionFontSize: "18pt",
  normalTextSize: "13pt",
};

export const fontSizeConfig2 = {
  sm: {
    logoFontSize: "18pt",
    linksNavFontSize: "12pt",
    titleSectionFontSize: "18pt",
    normalTextSize: "10pt",
    smallTextSize: "9pt",
  },
  md: {
    logoFontSize: "18pt",
    linksNavFontSize: "12pt",
    titleSectionFontSize: "18pt",
    normalTextSize: "13pt",
    smallTextSize: "",
  },
  lg: {
    logoFontSize: "18pt",
    linksNavFontSize: "12pt",
    titleSectionFontSize: "18pt",
    normalTextSize: "13pt",
    smallTextSize: "",
  },
};

export const fontFamily = {
  title: "Playfair Display",
  text: "Lato",
  emphasis: "Roboto Mono",
};
