import React from 'react';
import TodoItem from '../TodoItem/TodoItem'

const TodoList = ({ todos, deleteTodo }) => {
    return (
        <div>
            <ul>
                {
                    todos.map((todo, index) =>
                        <TodoItem key={index}
                            index={index}
                            todo={todo}
                            deleteTodo={deleteTodo} />)
                }
            </ul>
        </div>
    )

}

export default TodoList;
