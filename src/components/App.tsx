import React, { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Main from "../pages/Main/Main";
// import RiizeQuiz from "../pages/RiizeQuiz/RiizeQuiz";

const Main = lazy(() => import("../pages/Main/Main"));
const RiizeQuiz = lazy(() => import("../pages/RiizeQuiz/RiizeQuiz"));

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/riize" element={<RiizeQuiz />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
