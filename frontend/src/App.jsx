import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Sidebar from "../src/components/layouts/sidebar/sidebar";
import Playlist from "./pages/playlist";
import Login from "./pages/LogReg/register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
