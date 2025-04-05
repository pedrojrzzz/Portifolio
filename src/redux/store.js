import { configureStore } from "@reduxjs/toolkit";
import theme from "../redux/slices/themeSlice";

const store = configureStore({
  reducer: {
    theme,
  },
});

export default store;
