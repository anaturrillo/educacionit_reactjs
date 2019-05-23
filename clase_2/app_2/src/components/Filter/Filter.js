import React from 'react'

const Filter = ({onFilterChange}) => {
    return <input placeholder="Buscar..." style={{width: '100%'}} onChange={onFilterChange} />
}

export default Filter