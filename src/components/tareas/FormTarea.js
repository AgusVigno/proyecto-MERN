import React, {useContext, useState, useEffect} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const FormTarea = () => {
    //extraer si un proyecto esta activo
    const proyectosContext = useContext(proyectoContext);
    const {proyecto} = proyectosContext;

    //obtener la funcion del context de tarea
    const tareasContext = useContext(tareaContext);
    const { tareaseleccionada, agregarTarea, validarTarea, errortarea, obtenerTareas, actualizarTarea, limpiarTarea } = tareasContext;

    //Effect que detecta si hay una tarea seleccionada
    useEffect(() => {
        if(tareaseleccionada !== null){
            guardarTarea(tareaseleccionada);
        }else{
             guardarTarea({
                 nombre: ''
             });
        }
    }, [tareaseleccionada]);

    //state del formulario
    const [tarea, guardarTarea] = useState({
        nombre: ''
    });

    //extraer el nombre 
    const {nombre} = tarea;

    //si no hay proyecto seleccionado
    if(!proyecto) return null;

    //array destructuring para el proyecto actual
    const [proyectoActual] = proyecto;

    //leer los valores del formulario
    const handleChange = e => {
        guardarTarea({
            ...tarea,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        //validar
        if(nombre.trim() === ''){
            validarTarea();
            return;
        }

        //se verifica si es edicion o nueva tarea
        if(tareaseleccionada === null){
            //agregar la tarea
            tarea.proyecto = proyectoActual._id;
            agregarTarea(tarea);
        }else{
            //actualizar la tarea existente
            actualizarTarea(tarea);

            //limpiar la tareaseleccionada
            limpiarTarea();
        }

        //obtener todas las tareas del proyecto
        obtenerTareas(proyectoActual.id);
        
        //reiniciar el form
        guardarTarea({
            nombre: ''
        })
    }

    return (
        <div className="formulario">
            <form
                onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea..."
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>
                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value={tareaseleccionada ? 'Editar Tarea' : 'Agregar Tarea'}
                    />
                </div>
            </form>
            {errortarea 
            ?
                <p className="mensaje error">Nombre obligatorio</p>
            :
                null
            }
        </div> 
    );
}
 
export default FormTarea;