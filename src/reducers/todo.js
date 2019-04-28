import {getTodos, createTodo, updateTodo, destroyTodo} from "../lib/todoServices";
import {showMessage} from "./messages";

const initialState = {
    // todos: [
    //     {id: 1, name: "Render static UI", isCompleted: true},
    //     {id: 2, name: "Create initial state", isCompleted: true},
    //     {id: 3, name: "Render based on state", isCompleted: false}
    // ]
    todos: [],
    currentTodo: ''
};

const CURRENT_UPDATE = 'CURRENT_UPDATE';
export const TODO_ADD = 'TODO_ADD';
export const LOAD_TODOS = 'LOAD_TODOS';
export const TODO_REPLACE = 'TODO_REPLACE';
export const TODO_DELETE = 'TODO_DELETE';

export const updateCurrent = (val) => ({type: CURRENT_UPDATE, payload: val});
export const loadTodos = (todos) => ({type: LOAD_TODOS, payload: todos});
export const addTodo = (todo) => ({type: TODO_ADD, payload: todo});
export const replaceTodo = (todo) => ({type: TODO_REPLACE, payload: todo});
export const deleteTodo = (id) => ({type: TODO_DELETE, payload: id});

export const fetchTodos = () => {
    return (dispatch) => {
        dispatch(showMessage("Loading TODOs"))
        getTodos()
            .then(todos => {
                setTimeout(() => {
                    dispatch(loadTodos(todos))
                }, 2000);

            });
    }
};

export const saveTodo = (name) => {
    return (dispatch) => {
        dispatch(showMessage("Saving TODO"));
        createTodo(name)
            .then(todo => {
                dispatch(addTodo(todo))
            });
    }
};

export const toggleTodo = (id) => {
  return (dispatch, getState) => {
      dispatch(showMessage("saving TODO update..."));
      const {todos} = getState().todo;
      const todo = todos.find(t=> t.id === id);
      const toggled = {...todo, isCompleted: !todo.isCompleted};
      updateTodo(toggled)
          .then(res => dispatch(replaceTodo(res)));
  }
};

export const removeTodo = (id) => {
    return (dispatch, getState) => {
        dispatch(showMessage("Removing TODO update..."));
        destroyTodo(id)
            .then(() => dispatch(deleteTodo(id)));
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case TODO_ADD:
            return {...state, currentTodo:'', todos: state.todos.concat(action.payload)}
        case CURRENT_UPDATE:
            return {...state, currentTodo: action.payload};
        case LOAD_TODOS:
            return {...state, todos: action.payload}
        case TODO_REPLACE:
            return {...state, todos: state.todos.map(t=> t.id === action.payload.id ? action.payload: t)}
        case TODO_DELETE:
            return {...state, todos: state.todos.filter(t => t.id !== action.payload)}
        default:
            return state

    }
    // return state;
}