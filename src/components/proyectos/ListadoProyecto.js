import React from 'react';
import Proyecto from './Proyecto';

const ListadoProyecto = () => {

    const proyectos = [
        {nombre: 'Tienda Virtual'},
        {nombre: 'Wordpress'},
        {nombre: 'Ecommerce'}
    ];

    return ( 
        <ul className="listado-proyectos">
            {proyectos.map(proyecto => (
                <Proyecto
                    key={proyecto.nombre} 
                    proyecto={proyecto}
                />
            ))}
        </ul>
     );
}
 
export default ListadoProyecto;