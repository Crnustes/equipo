import React from 'react'
import "./Colaborador.css"
import { IoCloseCircle } from "react-icons/io5";


const Colaborador = (props) => {

    const {nombre, puesto, foto, id} = props.datos
    const {colorPrimario, eliminarColaborador} = props
    return (
        <div className="colaborador">
            <IoCloseCircle   className="eliminar" onClick={ ()=> eliminarColaborador(id)} />
            <div className="encabezado" style={{backgroundColor: colorPrimario}}>
                <img src={foto}  alt ={nombre}/>
            </div>
            <div className="info">
                <h4>{nombre}</h4>
                <h5>{puesto}</h5>
            </div>
        </div>
    )
}

export default Colaborador
