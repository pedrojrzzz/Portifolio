/* eslint-disable no-undef */
import { useState, useEffect } from "react";

export const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleChangeWindowWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleChangeWindowWidth);

    return () => {
      window.removeEventListener("resize", handleChangeWindowWidth);
    };
  }, []);

  return screenWidth;
};
