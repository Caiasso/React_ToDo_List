/* eslint-disable react/prop-types */
import { useState } from "react";
import { useAppContext } from "../../../hooks";
import { Botao, TIPO_BOTAO } from "../../Botao";
import style from "./ListaTarefasItem.module.css";
import { CampoTexto } from "../../CampoTexto/CampoTexto";

const ListaTarefasItem = (props) => {
  const { id, nome } = props;
  const [estaEditando, setEstaEditando] = useState(false);
  const { removerTarefa } = useAppContext();
  const { editarTarefa } = useAppContext();
  return (
    <li className={style.ListaTarefasItem}>
      {estaEditando && (
        <CampoTexto
          defaultValue={nome}
          onChange={(event) => editarTarefa(id, event.currentTarget.value)}
          onBlur={() => setEstaEditando(false)}
          autoFocus
        />
      )}
      {!estaEditando && (
        <span onDoubleClick={() => setEstaEditando(true)}>{nome}</span>
      )}
      <Botao
        texto="-"
        tipo={TIPO_BOTAO.SECUNDARIO}
        onClick={() => removerTarefa(id)}
      />
    </li>
  );
};

export { ListaTarefasItem };
