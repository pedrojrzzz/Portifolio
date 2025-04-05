import { createSlice } from "@reduxjs/toolkit";
import { colorDarkTheme, colorLightTheme } from "../../config/color";

const initialState = {
  theme: "dark",
  currentColorConfig: colorDarkTheme,
};

const themeSlice = createSlice({
  name: "themeSlice",
  initialState,
  reducers: {
    changeTheme(state) {
      state.theme = state.theme === "dark" ? "light" : "dark";

      state.currentColorConfig =
        state.currentColorConfig.currentTheme === "dark"
          ? colorLightTheme
          : colorDarkTheme;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
