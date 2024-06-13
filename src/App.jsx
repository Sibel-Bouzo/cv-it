import { CreateCv } from "./pages/CreateCv/CreateCv";
import { HomePage } from "./pages/Home/HomePage";
import "./styles/global.css";
import "react-quill/dist/quill.snow.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/create-cv" element={<CreateCv />} />
    </Routes>
  );
}

export default App;
