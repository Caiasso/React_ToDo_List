import { Outlet } from "react-router-dom";
import { Cabecalho, Conteudo, Rodape } from "../../components";
// import { Inicial } from "../../pages";

const LayoutPadrao = () => {
  return (
    <>
      <Cabecalho nomeUsuario="Guilherme" />
      <Conteudo>
        <Outlet />
      </Conteudo>
      <Rodape criador="Caiasso" />
    </>
  );
};

export { LayoutPadrao };
