import React, {useState} from 'react';
import Error from './Error';

const Formulario = ({guardarBusquedaLetra}) => {

    const [busqueda,guardarBusqueda]= useState({
        artista:'',
        cancion:''
    });

    //State de error
    const [error,guardarError] = useState(false)

    //extraer artista y cancion 
    const {artista, cancion} = busqueda

    //funcion a cada input para leer el contenido 
    const actualizarState = e =>{
        
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    //consultar las apis 
    const consultarInformacion = e =>{
        e.preventDefault();

        if(artista.trim() === '' || cancion.trim() === ''){
            guardarError(true);
            return ;
        }
        guardarError(false)

        //Pasar a componente principal
        guardarBusquedaLetra(busqueda);
        
       
    }

    return ( 

        <div className='bg-info'>
            {error ? <p className='alert alert-danger text-center p-2'>todos los campos son obligatorios</p> : null}
            <div className='container'>
                <div className='row'>
                    <form className='col card text-white bg-transparent mb-5 pt-5 pb-2' onSubmit={consultarInformacion}>
                        <fieldset>
                            <legend className='text-center'>Buscardor Letras de canciones </legend>

                            <div className='row'>

                                <div className='col-md-6'>
                                    <div className='form-group'> 
                                        <label >Artista</label>
                                        <input type="text" className='form-control' name='artista' placeholder='Nombre Artista' value={artista} onChange={actualizarState}/>
                                     </div>  
                                </div>
                                
                                <div className='col-md-6'>
                                    <div className='form-group'> 
                                        <label >Cancion</label>
                                        <input type="text" className='form-control' name='cancion' placeholder='Nombre Cancion' value={cancion} onChange={actualizarState}/>
                                     </div>  
                                </div> 

                            </div>
                            <button type='submit' className='btn btn-primary float-right'>Buscar</button>
                        </fieldset>
                    </form> 
                </div>
            </div>
        </div>

    );
}
 
export default Formulario;  