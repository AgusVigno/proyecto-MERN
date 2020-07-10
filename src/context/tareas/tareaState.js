import React, {useReducer} from 'react';
import TareaReducer from './tareaReducer';
import tareaContext from './tareaContext';
import clienteAxios from '../../config/axios';
import { 
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA
} from '../../types';

const TareaState = (props) => {
    const initialState = {
        tareasproyecto: [],
        errortarea: false,
        tareaseleccionada: null
    }

    //crear dispatch y state
    const [state, dispatch] = useReducer(TareaReducer, initialState);

    //crear las funciones
    //obtener las tareas de un proyecto
    const obtenerTareas = async proyecto => {
        try {
            const respuesta = await clienteAxios.get('/api/tareas', { params:{ proyecto }});
            dispatch({
                type: TAREAS_PROYECTO,
                payload: respuesta.data.tareas
            })
        } catch (error) {
            console.log(error);
        }
    }

    //agregar una nueva tarea
    const agregarTarea = async tarea => {
        console.log(tarea);
        try {
            const respuesta = await clienteAxios.post('/api/tareas', tarea);
            console.log(respuesta);
            dispatch({
                type: AGREGAR_TAREA,
                payload: tarea
            });
        } catch (error) {
            console.log(error);
        }
    }

    //valida la tarea y muestra error si es necesario
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
    }

    //elimian una tarea por id
    const eliminarTarea = async (id, proyecto) => {
        try {
            await clienteAxios.delete(`/api/tareas/${id}`, {params: {proyecto}});
            dispatch({
                type: ELIMINAR_TAREA,
                payload: id
            });
        } catch (error) {
            console.log(error);
        }
    }

    //actualizar una tarea existente
    const actualizarTarea = async tarea => {
        try {
            const respuesta = await clienteAxios.put(`/api/tareas/${tarea.id}`, tarea);
            dispatch({
                type: ACTUALIZAR_TAREA,
                payload: respuesta.data.tarea
            });
        } catch (error) {
            console.log(error);
        }
    }

    //extrae una tarea para la edicion
    const guardarTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }

    //limpiar tareaseleciconada
    const limpiarTarea = () => {
        dispatch({
            type: LIMPIAR_TAREA
        })
    }

    return (
        <tareaContext.Provider
            value={{
                tareasproyecto: state.tareasproyecto, 
                errortarea: state.errortarea,
                tareaseleccionada: state.tareaseleccionada,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                guardarTareaActual,
                actualizarTarea,
                limpiarTarea 
            }}
        >
            {props.children}
        </tareaContext.Provider>
    )
}


export default TareaState; 