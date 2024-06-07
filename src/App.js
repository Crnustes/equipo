import {useState} from 'react'; 
import './App.css';
import Header  from "./components/header/Header.js";
import Formulario from "./components/Formulario/Formulario";
import MiOrg from "./components/MiOrg"
import Equipo from "./components/Equipo"


function App() {

  const [mostrarFormulario, actualizarMostrar ] = useState (false);

  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarFormulario)
  }

  return (
    <div >
      <Header/>
      {/* { mostrarFormulario ?  <Formulario /> : <></>  } */}
      {mostrarFormulario && <Formulario /> }
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      <Equipo equipo="Programación"/>
      <Equipo equipo="Diseño"/>
    </div>
  );
}

export default App;
