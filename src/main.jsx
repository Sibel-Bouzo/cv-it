import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AppProvider } from "./contexts/Context.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppProvider>
      <App />
    </AppProvider>
  </BrowserRouter>
);
