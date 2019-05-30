import React from 'react';
import {NavLink} from "react-router-dom";
import {Route, Switch} from "react-router";
import ModuloUno from "./ModuloUno";
import ModuloDos from "./ModuloDos";
import ModuloTres from "./ModuloTres";
import User from "./user/User";
import Users from "./user/Users";
import './App.css';

// activeStyle -> object. activeClass -> string.

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to={`/modulo-1`} activeStyle={{color:'orange'}}>modulo uno </NavLink>
        <NavLink to={`/modulo-2`} activeStyle={{color:'orange'}}>modulo dos</NavLink>
        <NavLink to={`/modulo-3`} activeStyle={{color:'orange'}}>modulo tres</NavLink>

        <NavLink to={`/users/`}>Usuarios con component</NavLink>
        <NavLink to={`/users2/`}>Usuarios con render</NavLink>
        <NavLink to={`/users3/`}>Usuarios con children</NavLink>
      </nav>
      <div>
        <Switch>
          <Route path={`/modulo-1`} component={ModuloUno}/>
          <Route path={`/modulo-2`} component={ModuloDos}/>
          <Route path={`/modulo-3`} component={ModuloTres}/>

          <Route path={`/users/:id`} component={User}/>

          <Route path={`/users`} component={Users} />

          <Route path={`/users2`} render={props => {
            return <Users {...props}/>
          }} />

          <Route path={`/users3`} children={({match}) => {
            return <Users />
          }} />
        </Switch>
      </div>
    </div>

  );
}

export default App;
