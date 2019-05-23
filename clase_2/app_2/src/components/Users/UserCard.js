import React from 'react'

const Card = ({user}) => <div className="card" style={{"width": "18rem"}}>
  <div className="card-header">
    {user.nombre} {user.apellido}
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">{user.email}</li>
  </ul>
</div>

const UserCard = ({user}) => {
    return user ? <Card user={user} /> : ':)'
}

export default UserCard