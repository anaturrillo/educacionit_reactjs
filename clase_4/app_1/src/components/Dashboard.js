import React from 'react'
import ToDoItem from "./ToDoItem";
import {connect} from 'react-redux'
import {addTarea} from "../actions";

class Dashboard extends React.Component{
  state = {tarea:''};
  onChange = (e) => {
    this.setState({tarea: e.target.value})
  };

  addTarea = () => {
    if (this.state.tarea) this.props.add(this.state.tarea);
    this.setState({tarea:''})
  };

  render = () => {
    return <div>
      <ul>
        {this.props.tareas.length > 0 ? this.props.tareas.map((e, index) => <ToDoItem key={index} tarea={e} />): 'todavia no hay tareas'}
      </ul>
      <input value={this.state.tarea} onChange={this.onChange} placeholder="tarea"/>
      <button onClick={this.addTarea}>agregar item</button>
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    tareas: state.tareas
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: tarea => dispatch(addTarea(tarea))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
