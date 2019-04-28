import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Todos from "./components/ToDo";
import store from './store';


import {Provider} from 'react-redux';

// const todoChangeHandler = (val) => store.dispatch(updateCurrent(val));



ReactDOM.render(
    <Provider store={store}>
        <Todos />
    </Provider>,
    document.getElementById('root'));

// setTimeout(() => {
//     store.dispatch({type: 'TODO_ADD', payload: {id: 4, name: "Add a todo", isCompleted: true}})
// }, 2000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
