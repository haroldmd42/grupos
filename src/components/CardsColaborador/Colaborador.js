import "./Colaborador.css"
import {AiOutlineHeart, AiFillHeart} from "react-icons/ai"

const Colaborador = (props) => {
    const { nombre, puesto, foto, equipo, id,fav } = props.datos
    const { colorPrimario, eliminarColaborador, like } = props
    return <div className="colaborador">
        
        <div className="encabezado" style={{ backgroundColor: colorPrimario }}>
            <span className="eliminar" onClick={() => eliminarColaborador(id)  }> <i class="fa fa-trash" aria-hidden="true"></i></span>
            <img src={foto} alt={nombre} />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <AiFillHeart color="red"  onClick={() => like(id)}/>: <AiOutlineHeart  onClick={() => like(id)}/> }
            
            
        </div>
    </div>
}

export default Colaborador