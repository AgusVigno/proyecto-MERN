import React, {useState, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/autenticacion/authContext';

const Login = (props) => {
    //extraer los valores del context
    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;

    //extraer los valores del context
    const authContext = useContext(AuthContext);
    const {mensaje, autenticado, iniciarSesion} = authContext;

    //en caso de que el usuario no exista o password sea incorrecta
    useEffect(() => {
        if(autenticado){
            props.history.push('/proyectos');
        }
        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
        // eslint-disable-next-line
    }, [mensaje, autenticado, props.history]);

    //state para iniciar sesion
    const [usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    });

    //extraer las variables del usuario
    const {email, password} = usuario;

    const onChange = (e) => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        });
    }

    const onSubmit = (e) => {
        e.preventDefault();

        //validar
        if(email.trim() === '' || password.trim() === ''){
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
        }

        iniciarSesion({email, password});
    }
    
    return ( 
        <div className="form-usuario">
            {alerta ? (<div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div>) : null}
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesión</h1>

                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Tu email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Tu Password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <input 
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Iniciar Sesion"
                        />
                    </div>
                </form>
                <Link to="/nueva-cuenta" className="enlace-cuenta">
                    Obtener Cuenta
                </Link>
            </div>
        </div>
    );
}
 
export default Login;