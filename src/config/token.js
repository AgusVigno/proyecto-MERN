import clienteAxios from './axios';

const tokenAuth = token => {
    if(token){
        clienteAxios.defaults.headers.common['x-auth-token'] = token;
    } else{
        delete clienteAxios.headers.common['x-auth-token'];
    }
}

export default tokenAuth;