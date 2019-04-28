import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Todos} from "./components/ToDo";
import store from './store';
import {bindActionCreators} from "redux";
import {updateCurrent} from './reducers/todo';

import {Provider} from 'react-redux';

// const todoChangeHandler = (val) => store.dispatch(updateCurrent(val));

const actions = bindActionCreators({updateCurrent}, store.dispatch);

const render = () => {
    const state = store.getState();
    ReactDOM.render(<Todos todos={state.todos}
                           currentTodo={state.currentTodo}
                            changeCurrent={actions.updateCurrent}/>,
        document.getElementById('root'));
};

render();

store.subscribe(render);

// setTimeout(() => {
//     store.dispatch({type: 'TODO_ADD', payload: {id: 4, name: "Add a todo", isCompleted: true}})
// }, 2000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
