import React, {Fragment, useState, useRef, useEffect} from "react";
import { TodoList } from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";
import { Button, ButtonGroup, Alert } from "react-bootstrap";

export function App(){
    const[todos,setTodos] = useState([
        {id: 1,task:"Tarea 1 ",completed : false},
        {id: 2,task:"Tarea 2 ",completed : false},]);

    const todoTaskRef = useRef();

    
    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem("todoApp.todos"));
        if (storedTodos) setTodos(storedTodos);
    }, []);

    useEffect(() => {
        localStorage.setItem("todoApp.todos",JSON.stringify(todos));
    },[todos]);

    const toggleTodo = (id) => {
        const newTodos = [...todos];
        const todo = newTodos.find((todo) => todo.id === id);
        todo.completed = !todo.completed;
        setTodos(newTodos);
    };

    const handleClearAll = () => {
        const newTodos = todos.filter((todo) => !todo.completed);
        setTodos(newTodos);
    };

    const handleTodoAdd = () =>{
        const task = todoTaskRef.current.value;
        if(task === "") return;
        setTodos((prevTodos) =>{
            return [...prevTodos,{id:uuidv4(),task,completed:false}];
        });
        todoTaskRef.current.value = null;
    };
    return (
        <div className="container text-center">
            <TodoList todos={todos} toggleTodo={toggleTodo}/>
            <ButtonGroup className="mb-3 mt-2">
            <input ref={todoTaskRef} type="text" placeholder="Nueva Tarea" />
            <Button onClick={handleTodoAdd} variant="outline-success" >➕​</Button>
            <Button onClick={handleClearAll} variant="outline-danger" >❌​</Button>
            </ButtonGroup>
            <Alert variant="primary">Te quedan {todos.filter((todo) => !todo.completed).length} tareas por terminar</Alert>
        </div>
    
    );

}