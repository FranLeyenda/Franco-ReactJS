import React from 'react'

const ArrayComponent = ({persona}) => {
    return (
        <div>
            <ul>
                <li>Nombre: {persona.nombre}</li>
                <li>Apellido: {persona.apellido}</li>
                <li>Edad: {persona.edad}</li>
            </ul>
        </div>
    )
}

export default ArrayComponent
