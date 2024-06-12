import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AppProvider } from "./contexts/Context.jsx";
import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <AppProvider>
      <App />
    </AppProvider>
  </HashRouter>
);
