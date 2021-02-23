import React from 'react';
import Todo from './Todo';

const TodoList=({todoList,handleToggle,handleFilter})=>{
    return (
        <div>
            {todoList.map((todo)=>{
                return (
                    <Todo todo={todo} handleToggle={handleToggle}></Todo>
                )
            })}
            <button style={{margin:'20px'}} onClick={handleFilter}>Clear Complete</button>
        </div>
    )
}
export default TodoList