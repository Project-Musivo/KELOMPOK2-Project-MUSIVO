import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dasboardadmin from "./pages/dasboardadmin";
import Music from "./pages/musicadmin";
import DataUser from "./pages/datauseradmin";
import Setting from "./pages/settingadmin";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dasboardadmin />} />
        <Route path="/Music" element={<Music />} />
        <Route path="/DataUser" element={<DataUser />} />
        <Route path="/Setting" element={<Setting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
