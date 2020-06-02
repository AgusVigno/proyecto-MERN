import React, {useState} from 'react';




const Login = () => {

    //state para iniciar sesion
    const [usuario, guardarUsuario] = useState({
        correo: '',
        password: ''
    });

    //extraer las variables del usuario
    const {correo, password} = usuario;

    const onChange = (e) => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        });
    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesión</h1>

                <form>
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
                        <input 
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Iniciar Sesion"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default Login;