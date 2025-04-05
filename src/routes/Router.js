import React from "react";
import { Route, Routes } from "react-router-dom";
import Page404 from "../components/pages/404/Page404";
import Home from "../pages/Home/Home";

export default function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
