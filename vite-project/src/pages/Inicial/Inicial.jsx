import { FormCriarTarefas, ListaTarefas } from "../../components";
import style from "./Inicial.module.css";

const Inicial = () => {
  return (
    <div className={style.Inicial}>
      <FormCriarTarefas></FormCriarTarefas>
      <ListaTarefas />
    </div>
  );
};

export { Inicial };
