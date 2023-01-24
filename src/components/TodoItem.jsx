import React from "react";


export function TodoItem({todo, toggleTodo}){
    const{id,task,completed} = todo;
    const handleTodoClick = () => {
        toggleTodo (id);
    };
    return (
        <div className="card mt-2 w-25">
            <h3 className="card-title text-center">
                {task}
            </h3>
            <div className="card-body text-center"> 
            <input type="checkbox" checked={completed} onChange={handleTodoClick}/>
            </div>
            
        </div>
    );
}