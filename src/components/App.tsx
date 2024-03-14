import React, { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Translation/i18n";

const Main = lazy(() => import("../pages/Main/Main"));
const RiizeQuiz = lazy(() => import("../pages/RiizeQuiz/RiizeQuiz"));
const HandGame = lazy(() => import("../pages/HandGame/HandGame"));

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/riize" element={<RiizeQuiz />} />
        <Route path="/handgame" element={<HandGame />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
