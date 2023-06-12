import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Favorit from "./pages/favorit";
import Playlist from "./pages/playlist";
import ProfileSetting from "./pages/settingPage/profilesetting";
import Login from "./pages/LogReg/Login";
// import Regis from "./pages/LogReg/Regis";

import Register from "./pages/LogReg/register";
import About from "./pages/settingPage/about";

import Leaderboard from "./pages/leaderboard";
import Premium from "./pages/premium";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/regis" element={<Regis />} /> */}
        <Route path="/favorit" element={<Favorit />} />
        <Route path="/profilesetting" element={<ProfileSetting />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/about" element={<About />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/premium" element={<Premium />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
