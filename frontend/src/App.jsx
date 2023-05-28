import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Favorit from "./pages/favorit";
import Playlist from "./pages/playlist";
import Login from "./pages/LogReg/register";
import Leaderboard from "./pages/leaderboard";
import About from "./pages/settingPage/about";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/favorit" element={<Favorit />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/about" element={<About />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
