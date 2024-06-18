import { useState } from "react";
import { v4 as uuid } from "uuid"
import "./App.css";
import Header from "./components/header/Header.js";
import Formulario from "./components/Formulario/Formulario";
import MiOrg from "./components/MiOrg";
import Equipo from "./components/Equipo";
import Footer from "./components/Footer";

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true);
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id:uuid(),
      equipo: "Programación",
      foto: "https://github.com/Crnustes.png",
      nombre: "Cristian David Ñustes Martinez",
      puesto: "Desarrollador y Front End de grandes ideas",
    },
    {
      id:uuid(),
      equipo: "Programación",
      foto: "https://github.com/Crnustes.png",
      nombre: "Cristian David Ñustes Martinez",
      puesto: "Desarrollador y Front End de grandes ideas",
    },
    { 
      id:uuid(),
      equipo: "Front End",
      foto: "https://github.com/Crnustes.png",
      nombre: "Cristian David Ñustes Martinez",
      puesto: "Desarrollador y Front End de grandes ideas",
    },
    {
      id:uuid(),
      equipo: "Devops",
      foto: "https://github.com/Crnustes.png",
      nombre: "Cristian David Ñustes Martinez",
      puesto: "Desarrollador y Front End de grandes ideas",
    },
  ]);
  const [equipos, actualizarEquipos] = useState(
    [
      { 
        id:uuid(),
        titulo: "Programación",
        colorPrimario: "#57C278",
        colorSecundario: "#D9F7E9",
      },
      { 
        id:uuid(),
        titulo: "Front End",
        colorPrimario: "#82CFFA",
        colorSecundario: "#E8F8FF",
      },
      {
        id:uuid(),
        titulo: "Data Science",
        colorPrimario: "#A6D157",
        colorSecundario: "#F0F8E2",
      },
      {
        id:uuid(),
        titulo: "Devops",
        colorPrimario: "#E06B69",
        colorSecundario: "#FDE7E8",
      },
      {
        id:uuid(),
        titulo: "UX y Diseño",
        colorPrimario: "#DB6EBF",
        colorSecundario: "#FAE9F5",
      },
      {
        id:uuid(),
        titulo: "Móvil",
        colorPrimario: "#FFBA05",
        colorSecundario: "#FFF5D9",
      },
      {
        id:uuid(),
        titulo: "Innovación y Gestión",
        colorPrimario: "#FF8A29",
        colorSecundario: "#FFEEDF",
      },
    ]
  )

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };

  //lista de Equipos

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo Colaborador", colaborador);
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador]);
  };

  //eliminar colaborador
  const eliminarColaborador =(id) =>{
     console.log("Elminmar colaborador", id);
     const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id  !==  id)
     actualizarColaboradores(nuevosColaboradores);
  }

  //Actualizar color de equipo

  const actualizarColor = (color, id) =>{
    console.log("Actualizar: ", color, id);
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color
      }

      return equipo
    })


    actualizarEquipos(equiposActualizados);
  } 

  //Crear equipo

    const crearEquipo =(nuevoEquipo) =>{
      console.log(nuevoEquipo);
      actualizarEquipos([...equipos, {...nuevoEquipo, id :uuid()}])
    }
  return (
    <div>
      <Header />
      {/* { mostrarFormulario ?  <Formulario /> : <></>  } */}
      {mostrarFormulario && (
        <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo = {crearEquipo}
        />
      )}

      <MiOrg cambiarMostrar={cambiarMostrar} />
      {equipos.map((equipo) => (
        <Equipo
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.equipo === equipo.titulo)}
          eliminarColaborador = {eliminarColaborador}
          actualizarColor={actualizarColor}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
