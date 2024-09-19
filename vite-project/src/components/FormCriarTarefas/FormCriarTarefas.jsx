/* eslint-disable react/prop-types */
import { useState } from "react";
import { Botao, CampoTexto } from "../../components";
import style from "./FormCriarTarefa.module.css";
const FormCriarTarefas = (props) => {
  const [nomeTarefa, setNomeTarefa] = useState("");
  const { setTarefas } = props;

  const onChangeNomeTarefa = (event) => {
    setNomeTarefa(event.currentTarget.value);
  };
  const adicionarTarefa = (event) => {
    event.preventDeafult();

    if (!nomeTarefa) {
      return;
    }

    setTarefas((estadoAtual) => {
      const tarefa = {
        id: estadoAtual.length + 1,
        nome: nomeTarefa,
      };

      return [...estadoAtual, tarefa];
    });

    setNomeTarefa("");
  };

  return (
    <form className={style.FormCriarTarefas} onSubmit={adicionarTarefa}>
      <CampoTexto value={nomeTarefa} onChange={onChangeNomeTarefa} />
      <Botao texto="+" />
    </form>
  );
};

export { FormCriarTarefas };
