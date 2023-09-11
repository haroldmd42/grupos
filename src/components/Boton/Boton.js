import "./Boton.css"

const Boton = (props)=>{
    return <button className="boton">
        {props.children} <i class="fa fa-arrow-circle-o-up" aria-hidden="true"></i>
    </button>
}

export default Boton