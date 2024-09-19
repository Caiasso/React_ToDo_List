import { Conteudo } from "../../components";
import style from "./PageNotFound.module.css";

const PageNotFound = () => {
  return (
    <>
      <Conteudo>
        <div className={style.PageNotFound}>
          <h1>404</h1>
          <br />
          <h2>Página não encontrada</h2>
        </div>
      </Conteudo>
    </>
  );
};

export { PageNotFound };
