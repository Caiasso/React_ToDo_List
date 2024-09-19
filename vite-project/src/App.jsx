// import { Inicial } from "./pages";
// import { Cabecalho, Conteudo, Rodape } from "./components";

import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

function App() {
  return (
    <BrowserRouter>
      <Router></Router>
    </BrowserRouter>
  );
}

export { App };
