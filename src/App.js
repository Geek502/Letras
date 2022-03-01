import { Fragment,useEffect,useState} from "react";
import axios from "axios";
import Formulario from "./Formulario";
import Cancion from "./Cancion";
import Info from "./Info"

function App() {

  //definir el State
  const[busqueda,guardarBusquedaLetra]= useState({})
  const[letra,guardarLetra]=useState('');
  const[info,guardarInfo]=useState({})
  useEffect(()=>{

    if(Object.keys(busqueda).length === 0) return;
      const consultarApiLetra = async() => {
        const {artista, cancion} = busqueda;
        const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`
        const url2 = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artista}`
        //Pomise
        const[letra,informacion] = await Promise.all([
          axios(url),
          axios(url2)
        ])
        guardarLetra(letra.data.lyrics);
        console.log(letra.data);

        guardarInfo(informacion.data.artists[0]);
        
        //const resultado = await axios(url);
       // guardarLetra(resultado.data.lyrics);
       


      }
      consultarApiLetra();
  },[busqueda,info]);

  return (
    
   <Fragment>
      <Formulario 
        guardarBusquedaLetra={guardarBusquedaLetra}
      />

      <div className="container mt-5">
        <div className="row">
          
          <div className="col-md-6">
             <Info info = {info} />
          </div>
          
          <div className="col-md-6">
            <Cancion letra={letra}/>
          </div>
        
        </div>
      </div>
      
   </Fragment>
  

  );
}

export default App;
