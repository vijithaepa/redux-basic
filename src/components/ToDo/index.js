import React from 'react';
import './index.css';
import logo from "../../logo.svg";
import TodoForm from './Form'
import TodoList from "./TodoList";
import Message from "../Message/Message";

const Todos = (props) => {

    return (
        <div>
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
            </div>
            <Message message=''/>
            <TodoForm />
            <TodoList />
        </div>
    );
};

export default Todos;