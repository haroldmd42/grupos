
import { useState } from "react";
import "./Campos.css";


const Campos = (props) => {
  
  const placeholderModificado = `${props.placeholder}...`;
  // destructurar 
  const { type = "text"} = props

  const manejarCambio = (e) =>{
    props.actualizarValor(e.target.value)
  }
  
  
  return (
    <div className={`campo campo-${type}`}>
      <label>{props.titulo}</label>
      <input
        placeholder={placeholderModificado}
        required={props.required}
        value={props.valor}
        onChange={manejarCambio}
        type={type}
      />
    </div>
  );
};

export default Campos;
