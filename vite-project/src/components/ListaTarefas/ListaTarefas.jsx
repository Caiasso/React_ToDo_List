/* eslint-disable react/prop-types */
import { useAppContext } from "../../hooks";
import { ListaTarefasItem } from "../FormCriarTarefas";
import style from "./ListaTarefas.module.css";

const ListaTarefas = () => {
  const { tarefas } = useAppContext();

  return (
    <ul className={style.ListaTarefas}>
      {tarefas.map((item) => (
        <ListaTarefasItem key={item.id} id={item.id} nome={item.nome} />
      ))}
    </ul>
  );
};

export { ListaTarefas };
