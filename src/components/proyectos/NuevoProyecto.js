import React, {Fragment, useState} from 'react';


const NuevoProyecto = () => {

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
    
    return ( 
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
            >Nuevo Proyecto</button>

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
            </form>
        </Fragment>
     );
}
 
export default NuevoProyecto;