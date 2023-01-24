import React from "react";
import { TodoItem } from "./TodoItem";

export function TodoList({todos, toggleTodo}){
    return (
        <div className="d-flex justify-content-center">
        {todos.map((todo) => (
            <TodoItem key={todo.id}todo= {todo} toggleTodo={toggleTodo}/>
        ))}
        </div>
    );
}