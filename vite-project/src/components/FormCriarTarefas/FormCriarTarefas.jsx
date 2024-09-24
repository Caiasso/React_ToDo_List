/* eslint-disable react/prop-types */
import { useState } from "react";
import { Botao, CampoTexto } from "../../components";
import style from "./FormCriarTarefa.module.css";
import { useAppContext } from "../../hooks";

const FormCriarTarefas = () => {
  const [nomeTarefa, setNomeTarefa] = useState("");
  const { adicionarTarefa } = useAppContext();

  const onChangeNomeTarefa = (event) => {
    setNomeTarefa(event.currentTarget.value);
  };
  const submeterFormulario = (event) => {
    if (!nomeTarefa) {
      return;
    }

    adicionarTarefa(nomeTarefa);

    setNomeTarefa("");

    event.preventDefault();
  };

  return (
    <form className={style.FormCriarTarefas} onSubmit={submeterFormulario}>
      <CampoTexto value={nomeTarefa} onChange={onChangeNomeTarefa} />
      <Botao texto="+" />
    </form>
  );
};

export { FormCriarTarefas };
