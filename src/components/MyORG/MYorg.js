import { useState } from "react";
import "./Myorg.css";
const MYorg = (props) => {
  //Estado - hooks
  //useState
  //useState()
  //const [nombre Variable,funcionAtualizada] = useState(valorInicial)
  //const [mostrar, actualizarLink] = useState(true);
  //const manejarClick = () => {
   // actualizarLink(!mostrar);
  //};
  return (
    <section className="orgSection">
      <h3 className="tittle"> GRUPOS CONFORMADOS</h3>
      <img src="/images/Add.png" alt="Añadir" onClick={props.cambiarMostrar} />
    </section>
  );
};
export default MYorg;
