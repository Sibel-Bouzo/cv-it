// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import { AppProvider } from "./contexts/Context.jsx";
// import { BrowserRouter } from "react-router-dom";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//     <AppProvider>
//       <App />
//     </AppProvider>
//   </BrowserRouter>
// );

import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AppProvider } from "./contexts/Context.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Home/HomePage.jsx";
import { CreateCv } from "./pages/CreateCv/CreateCv.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router basename="/cv-it">
    <AppProvider>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/create-cv" element={<CreateCv />} />
      </Routes>
    </AppProvider>
  </Router>
);
