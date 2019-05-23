import React from 'react'

const Card = (props) => {
    console.log(props)
    return <div>
    <h1>Nombre: {props.aName}</h1>
</div>
}


export default Card