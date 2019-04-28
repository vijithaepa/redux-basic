import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchTodos, toggleTodo, removeTodo} from '../../reducers/todo';
import './index.css';

const TodoItem = ({id, name, isCompleted, toggleTodo, removeTodo}) => (
    <li>
        <span className='delete-item'>
            <button onClick={() => removeTodo(id)}>x</button></span>
        <input type="checkbox"
            // defaultChecked={isCompleted}
               checked={isCompleted}
               onChange={() => toggleTodo(id)}/>
        {name}
    </li>
);

class TodoList extends Component {

    componentDidMount() {
        this.props.fetchTodos();
    }

    render() {
        console.log("Rendering list");

        return (
            <div className='todo-list'>
                <ul>
                    {this.props.todos.map(todo =>
                        <TodoItem {...todo} key={todo.id}
                                  toggleTodo={this.props.toggleTodo}
                                  removeTodo={this.props.removeTodo}/>
                    )}
                </ul>
            </div>
        );
    }
}

export default connect(
    state => ({todos: state.todo.todos}),
    {fetchTodos, toggleTodo, removeTodo}
)(TodoList);