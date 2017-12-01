import React, { Component } from 'react';
import TodoNew from '../TodoNew/TodoNew';
import TodoList from '../TodoList/TodoList';

const styles = {
    title: {
        'color': 'red'
    }
}

class Todo extends Component {

    state = {
        todos: [
            "Tarea 1",
            "Tarea 2"
        ]
    }

    addTodo = (todo) => {
        this.setState((prevState) => {
            return {todos: [...prevState.todos, todo]}
        })
    }

    deleteTodo = (index) => {
        this.setState( (prevState) => {
            return {todos: prevState.todos.filter((todo, i) => {
                return i !==index;
            })}
        } );
    }

    render() {
        return (<div className="App">
            <h1 style={styles.title}>To do</h1>
            <TodoNew addTodo={this.addTodo}/>
            <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} />
        </div>)
    }
}

export default Todo;