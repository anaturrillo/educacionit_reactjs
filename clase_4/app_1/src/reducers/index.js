import {combineReducers} from 'redux'

const tareas = (state = [], action) => {
  if (action.type === 'ADD') {
    return [...state, action.tarea]
  }
  return state
};

const appReducers = combineReducers({tareas});

export default appReducers
