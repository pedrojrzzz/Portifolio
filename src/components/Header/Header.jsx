import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../redux/slices/themeSlice";
import { ContainerNav, ContainerLogo, ContainerThemeToggle } from "./styled";

export default function Header() {
  const dispatch = useDispatch();
  const { theme, currentColorConfig } = useSelector((state) => state.theme);
  const insideCircle = useRef(null);

  const toggleTheme = () => {
    if (theme) {
      insideCircle.current.classList.toggle("inside-circle-dark");
      insideCircle.current.classList.toggle("inside-circle-light");
    }
    dispatch(changeTheme());
  };

  return (
    <ContainerNav colorConfig={currentColorConfig}>
      <ContainerLogo colorConfig={currentColorConfig}>
        <p>Portifólio</p>
      </ContainerLogo>

      <ContainerThemeToggle>
        <div className="circle" onClick={changeTheme}>
          <div
            onClick={toggleTheme}
            className={theme === "dark" ? "inside-circle-dark" : "inside-circle-light"}
            ref={insideCircle}
          ></div>
        </div>
      </ContainerThemeToggle>
    </ContainerNav>
  );
}
