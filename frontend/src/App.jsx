import { BrowserRouter, Routes, Route } from "react-router-dom";

// user
import Home from "./pages/home";
import Favorit from "./pages/favorit";
import Playlist from "./pages/playlist";
import Login from "./pages/LogReg/Login";
import Regis from "./pages/LogReg/Regis";
import About from "./pages/settingPage/about";
import Leaderboard from "./pages/leaderboard";
import Premium from "./pages/premium";
import Artist from "./pages/artist";
import ProfileSetting from "./pages/settingPage/profilesetting";

// admin
import DashAdmin from "./pages/admin pages/dasboardadmin";
import Music from "./pages/admin pages/music";
import DataUser from "./pages/admin pages/datauser";
import Setting from "./pages/admin pages/setting";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* User */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/regis" element={<Regis />} />
        <Route path="/favorit" element={<Favorit />} />
        <Route path="/profile" element={<ProfileSetting />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/about" element={<About />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/artist" element={<Artist />} />
        <Route path="/premium" element={<Premium />} />
        {/* admin */}
        <Route path="/dashadmin" element={<DashAdmin />} />
        <Route path="/music" element={<Music />} />
        <Route path="/dataUser" element={<DataUser />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;