import React from 'react'

const UserItem = ({user, selectUser}) => {
    return <tr onClick={selectUser(user)}>
        <td>{user.nombre}</td>
        <td>{user.apellido}</td>
    </tr>
}

export default UserItem

