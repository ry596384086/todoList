import React from 'react';

const Todo = ({ todo, handleToggle }) => {
    return (
        <div className={todo.complete ? "finished" : ''} onClick={handleToggle.bind(null, todo.id)}>
            {todo.task}
        </div>
    )
}
export default Todo