import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Sidebar from "../src/components/layouts/sidebar/sidebar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sidebar" element={<Sidebar />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
