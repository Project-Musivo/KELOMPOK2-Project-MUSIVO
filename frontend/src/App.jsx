import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";

import Favorit from "./pages/favorit";
import Sidebar from "../src/components/layouts/sidebar/sidebar";
import Playlist from "./pages/playlist";
import Login from "./pages/LogReg/register";


function App() {
  return (
    <BrowserRouter>
      <Routes>



        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/favorit" element={<Favorit />} />
         <Route path="/playlist" element={<Playlist />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
