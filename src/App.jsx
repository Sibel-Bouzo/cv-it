import "./styles/global.css";
import { CreateCv } from "./pages/CreateCv/CreateCv";
import "react-quill/dist/quill.snow.css";
import { HomePage } from "./pages/Home/HomePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/create-cv" element={<CreateCv />} />
      </Routes>
    </>
  );
}

export default App;
