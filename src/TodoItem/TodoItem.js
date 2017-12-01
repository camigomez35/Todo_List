import React from 'react';

const TodoItem = ({todo, deleteTodo, index}) => {
  return  (
    <li> 
        {todo} <button onClick={() => deleteTodo(index)}>X</button>
    </li>)
}

export default TodoItem;
