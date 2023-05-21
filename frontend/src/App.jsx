import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Favorit from "./pages/favorit";
import Playlist from "./pages/playlist";
import Login from "./pages/LogReg/register";
import AboutDev from "./pages/settingPage/about";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/favorit" element={<Favorit />} />
         <Route path="/playlist" element={<Playlist />} />

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/favorit" element={<Favorit />} />
        <Route path="/playlist" element={<Playlist />} />



        <Route path="/about" element={<AboutDev />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
