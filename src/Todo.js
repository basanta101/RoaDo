import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            value: ""
         }
    }
    handleChange=(e)=>{
        console.log(e.target.value)
        this.setState({
            value: e.target.value
        })
    }
    render() { 
        return ( 
            <div>
                <input placeholder="enter a todo" onChange={this.handleChange} value={this.state.value}/>
                <button >add</button>
            </div>
         );
    }
}
 
export default Todo;