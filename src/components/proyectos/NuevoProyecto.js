import React, {Fragment, useState, useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {

    //obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);
    const {formulario, mostrarFormulario} = proyectosContext;

    //state del proyecto
    const [proyecto, guardarProyecto] = useState({
        nombre: ''
    });

    //extraer las variables de proyecto
    const {nombre} = proyecto;

    const onChangeProyeto = (e) => {
        guardarProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        });
    }

    const onSubmitProyecto = (e) => {
        e.preventDefault();

        //validar proyecto


        //agregar al state


        //reiniciar el form
    }
    
    //mostrar ek formulario
    const onClickFormulario = () => {
        mostrarFormulario();
    }

    return ( 
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={onClickFormulario}
            >Nuevo Proyecto</button>

            {formulario 
            ? (
                <form
                    className="formulario-nuevo-proyecto"
                    onSubmit={onSubmitProyecto}
                >
                    <input 
                        type="text"
                        name="nombre"
                        placeholder="Nombre Proyecto"
                        className="input-text"
                        value={nombre}
                        onChange={onChangeProyeto}
                    />
                    <input 
                        type="submit"
                        className="btn btn-primario btn-block"
                        value="Agregar Proyecto"
                    />
                </form> )
            :
                null
            }
            
        </Fragment>
     );
}
 
export default NuevoProyecto;