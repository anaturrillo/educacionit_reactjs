import React from 'react'
import UserItem from './UserItem'

const UserList = ({usuarios, selectUser}) => {
    return <div>
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                </tr>
            </thead>
            <tbody>
                {usuarios.map((e, index) => <UserItem key={index} selectUser={selectUser} user={e} />)}
            </tbody>
        </table>
    </div>
}

export default UserList
