import React, { useState, useEffect } from 'react';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");
    const [idCounter, setIdCounter] = useState(1);


    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos'));
        const storedCounter = JSON.parse(localStorage.getItem('idCounter'));
        if (storedTodos) {
            setTodos(storedTodos);
        }
        if (storedCounter) {
            setIdCounter(storedCounter);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    useEffect(() => {
        localStorage.setItem('idCounter', JSON.stringify(idCounter));
    }, [idCounter]);

    const addTodo = () => {
        if (input.trim()) {
            const newTodo = { id: idCounter, text: input, time: new Date().toLocaleTimeString() };
            setTodos([...todos, newTodo]);
            setInput("");
            setIdCounter(idCounter + 1);
        }
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const refreshTodos = () => {
        const storedTodos = JSON.parse(localStorage.getItem('todos'));
        if (storedTodos) {
            setTodos(storedTodos);
        }
    };

    return (
        <div>
            <h1>Todo List</h1>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add a new task..."
            />
            <button onClick={addTodo}>Add</button>
            <button onClick={refreshTodos}>Refresh</button>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.text} - {todo.time}
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
