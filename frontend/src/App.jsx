import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";

import Login from "./pages/LogReg/register";

import Favorit from "../src/components/layouts/favorit/favorit";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/favorit" element={<Favorit />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
