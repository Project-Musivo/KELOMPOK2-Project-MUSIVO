import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Sidebar from "../src/components/layouts/sidebar/sidebar";
import Playlist from "./pages/playlist";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/playlist" element={<Playlist />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
