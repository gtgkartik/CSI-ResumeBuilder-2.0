import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.js";
import Intro from "./pages/Intro";
import ParentForm from "./pages/ParentForm";
import PdfGenerator from "./pages/Pdf";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<ParentForm/>} />
          <Route path="/pdf" element={<PdfGenerator/>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
