import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { AppContextProvider } from "./contexts/AppContext";

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Router></Router>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export { App };
