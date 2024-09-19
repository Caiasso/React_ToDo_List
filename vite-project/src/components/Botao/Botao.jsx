/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { TIPO_BOTAO } from "./constants";
import style from "./Botao.module.css";

const Botao = (props) => {
  const { texto, tipo = TIPO_BOTAO.PRIMARIO, ...outrasProps } = props;

  return (
    <button tipo={tipo} {...outrasProps} className={style.Botao}>
      {texto}
    </button>
  );
};

export { Botao };
