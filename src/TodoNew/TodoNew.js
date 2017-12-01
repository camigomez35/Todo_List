import React, { Component } from 'react';

class TodoNew extends Component {

    state = {
        newTodo: ""
    }

    onAddClock = () => {
        this.props.addTodo(this.state.newTodo);
    }

    onInputChange = (e) => {
        //console.log(e.target.value);
        this.setState({newTodo: e.target.value});
    }

    render(){
        return (
            <div>
                <input type="text" onChange={this.onInputChange}></input>
                <button onClick={this.onAddClock}>Add</button>
            </div>

            
        )
    }
    
}

export default TodoNew;
