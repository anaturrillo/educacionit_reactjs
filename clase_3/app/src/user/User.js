import React from 'react'

const User = (props) => {
  console.log(props)
  return <div>Pagina de usuario. Usuario: {props.match.params.id.toUpperCase()}</div>
};
export default User;
