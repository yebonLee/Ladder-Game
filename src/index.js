import React from "react";
import { render } from "react-dom";
import "./index.css";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import FirstPage from "./components/FirstPage/FirstPage";
import SetPage from "./components/SetPage/SetPage";
import LadderPage from "./components/LadderPage/LadderPage";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/firstpage" replace />} />
      <Route path="/firstpage" element={<FirstPage />} />
      <Route path="/setpage" element={<SetPage />} />
      <Route path="ladderpage" element={<LadderPage />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
