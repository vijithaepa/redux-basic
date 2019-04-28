export const getTodos = () => {
    return fetch("http://localhost:8085/todos")
        .then(res => res.json());
};

export const createTodo = (name) => {
    return fetch("http://localhost:8085/todos", {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({name: name, isCompleted: false})
    })
        .then(res => res.json());
};

export const updateTodo = (todo) => {
    return fetch(`http://localhost:8085/todos/${todo.id}`, {
        method: 'PUT',
        headers: {
            'accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
        .then(res => res.json());
};

export const destroyTodo = (id) => {
    return fetch(`http://localhost:8085/todos/${id}`, {
        method: 'DELETE',
        headers: {
            'accept': 'application/json',
            'Content-type': 'application/json'
        },
    })
};