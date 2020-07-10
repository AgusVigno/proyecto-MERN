import React, { useReducer } from 'react';
import AlertaReducer from './alertaReducer';
import alertaContext from './alertaContext';
import {
    MOSTRAR_ALERTA,
    OCULTAR_ALERTA
} from '../../types';


const AlertaState = (props) => {
    const initialState = {
        alerta: null
    }

    //crear dispatch y state
    const [state, dispatch] = useReducer(AlertaReducer, initialState);

    //funciones
    const mostrarAlerta = (msg, categoria) => {
        dispatch({
            type: MOSTRAR_ALERTA,
            payload: {
                msg,
                categoria
            }
        });

        //despues de 5 segundos, limpia el alerta
        setTimeout(() => {
            dispatch({
                type: OCULTAR_ALERTA
            })
        }, 5000);
    }

    return (
        <alertaContext.Provider
            value={{
                alerta: state.alerta,
                mostrarAlerta
            }}
        >
            {props.children}
        </alertaContext.Provider>
    )
}

export default AlertaState;