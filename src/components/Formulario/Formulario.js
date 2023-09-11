import { useState } from "react";
import "./Formulario.css";
import Campos from "../Campos/Campos";
import Listaopciones from "../Listaopciones/Listaopciones";
import Boton from "../Boton/Boton";
import { v4 as uuidv4 } from "uuid";

const Formulario = (props) => {
  const [nombre, actualizarNombre] = useState("");
  const [puesto, actualizarPuesto] = useState("");
  const [foto, actualizarFoto] = useState("");
  const [equipo, actualizarEquipo] = useState("");

  const [titulo, actualizarTitulo] = useState("");
  const [color, actualizarColor] = useState("")

  const { registrarColaborador,crearEquipo } = props;

  const manejarEnvio = (e) => {
    e.preventDefault();
    let datosEnviados = {
      id: uuidv4(),
      nombre: nombre,
      puesto: puesto,
      foto: foto,
      equipo,
    };
    registrarColaborador(datosEnviados);
  };

  const manejarNuevoEnvio = (e) =>{
    e.preventDefault()
    crearEquipo({titulo, colorPrimario: color})
  }
  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>INGRESA EL INTEGRANTE PARA CREAR LOS EQUIPOS</h2>
        <Campos
          titulo="Nombre"
          placeholder="Ingrese el Nombre"
          required
          valor={nombre}
          actualizarValor={actualizarNombre}
        />
        <Campos
          titulo="Cargo"
          placeholder="Ingrese el Cargo"
          required
          valor={puesto}
          actualizarValor={actualizarPuesto}
        />
        <Campos
          titulo="Foto"
          placeholder="Ingrese el Foto"
          required
          valor={foto}
          actualizarValor={actualizarFoto}
        />
        <Listaopciones
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
            />
            <Boton>
                Crear
            </Boton>
      </form>
      <form  className="formulario2" onSubmit={manejarNuevoEnvio}>
        <h2 style={{fontSize: `25px`}}>CREA UN NUEVO EQUIPO</h2>
        <Campos
          titulo="Titulo"
          placeholder="Ingrese el titulo"
          required
          valor={titulo}
          actualizarValor={actualizarTitulo}
        />
        <Campos
          titulo="Color"
          placeholder="Ingrese el Color"
          required
          valor={color}
          actualizarValor={actualizarColor}
          type="color"
        />
        <Boton>
                Registrar equipo
            </Boton>
        </form>
    </section>
  );
};

export default Formulario;
