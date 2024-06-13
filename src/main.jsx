import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AppProvider } from "./contexts/Context.jsx";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router basename="/cv-it">
    <AppProvider>
      <App />
    </AppProvider>
  </Router>
);
