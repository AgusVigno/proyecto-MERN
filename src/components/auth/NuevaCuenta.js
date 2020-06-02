import React, {useState} from 'react';
import {Link} from 'react-router-dom';



const NuevaCuenta = () => {

    //state para iniciar sesion
    const [usuario, guardarUsuario] = useState({
        nombre: '',
        correo: '',
        password: '',
        confirmar: ''
    });

    //extraer las variables del usuario
    const {nombre, correo, password, confirmar} = usuario;

    const onChange = (e) => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        });
    }

    const onSubmit = (e) => {
        e.preventDefault();


    }
    
    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Crear Cuenta</h1>

                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="correo">Nombre</label>
                        <input
                            type="text"
                            name="nombre"
                            id="nombre"
                            placeholder="Tu Nombre"
                            value={nombre}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="correo">Correo</label>
                        <input
                            type="email"
                            name="correo"
                            id="correo"
                            placeholder="Tu Correo"
                            value={correo}
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
                        <label htmlFor="confirmar">Confirmar Password</label>
                        <input
                            type="password"
                            name="confirmar"
                            id="confirmar"
                            placeholder="Confirmar Password"
                            value={confirmar}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <input 
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Registrarme"
                        />
                    </div>
                </form>
                <Link to="/" className="enlace-cuenta">
                    Iniciar Sesión
                </Link>
            </div>
        </div>
    );
}
 
export default NuevaCuenta;