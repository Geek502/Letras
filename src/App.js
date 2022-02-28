import { Fragment,useEffect,useState} from "react";
import Formulario from "./Formulario";

function App() {

  //definir el State
  const[busqueda,guardarBusquedaLetra]= useState({})

  useEffect(()=>{

      const consultarApi = async({
        if(Object.keys(busqueda).length ===0)



      })

  },[guardarBusquedaLetra]);

  return (
    
   <Fragment>
      <Formulario 
        guardarBusquedaLetra={guardarBusquedaLetra}
      />
   </Fragment>
  

  );
}

export default App;
