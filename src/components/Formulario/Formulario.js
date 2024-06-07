import {useState} from 'react'
import "./Formulario.css";
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaDeOpciones"
import Boton from "../Boton";


const  Formulario = () => {

    const [nombre, actualizarNombre] = useState  ("")
    const [puesto, actualizarPuesto] = useState  ("")
    const [foto, actualizarFoto] = useState  ("")
    const [equipo, actualizarEquipo] = useState("")

    const manejarEnvio  = (e) =>{ 
        e.preventDefault()
        console.log("manejarEnvio");

        let  datosAEvniar = {
            nombre, 
            puesto, 
            foto,
            equipo
        }
        console.log(datosAEvniar);

    }

    return (
       
        <section className="formulario">
            <form onSubmit = {manejarEnvio} > 
                <h2> Rellena el formulario para crear el colaborador.</h2>
                <CampoTexto titulo="Nombre" placeholder="Ingresa nombre completo" required valor={nombre} actualizarValor={actualizarNombre}/>
                <CampoTexto titulo="Puesto" placeholder="Escribe tu puesto" required  valor={puesto} actualizarValor={actualizarPuesto}/>
                <CampoTexto titulo="Foto" placeholder="URL de la imagen" required  valor={foto} actualizarValor={actualizarFoto}/>
                <ListaOpciones valor={equipo} actualizarEquipo={actualizarEquipo}/>
                <Boton texto="Crear"/>
            </form>
        </section>
    )
}

export default  Formulario

