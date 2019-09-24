import React from "react";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [],
      text: "",
      checked: false
    };
  }
  handleChange = e => {
    // console.log(e.target.value);
    let temp = "";
    this.setState({
      text: e.target.value
    });
    //
  };
  handleTodo = () => {
    let joined = this.state.value.concat(this.state.text);
    this.setState({
      value: joined,
      text: ""
    });
  };
  handleTodoDone = e => {
    console.log(e);
    this.setState({
      checked: true
    });
  };
  render() {
    console.log("===", this.state);
    const { value } = this.state;
    let temp = [];
    if (value) {
      value.map((item, index) => {
        console.log("hi");
        temp.push(
          <div className=" todos" key={index}>
            <div>
              <button
                className="btn-todo-done"
                onClick={item => {
                  this.handleTodoDone(item);
                }}
              >
                done
              </button>
            </div>
            <div>
              <p className={this.state.checked ? " checked" : null}>{item}</p>
            </div>
            <div>
              <button
                className="btn-todo-remove"
                onClick={this.handleTodoRemove}
              >
                remove
              </button>
            </div>
          </div>
        );
      });
    }
    return (
      <div className="App">
        <div className="prnt">
          <div className="todo-container">
            <div className="todo-container-c1">
              <div className="todoBar">
                <div>
                  <input
                    className="inpt"
                    placeholder="enter a todo"
                    onChange={this.handleChange}
                    value={this.state.text}
                  />
                </div>
                <div>
                  {" "}
                  <button className="btn" onClick={this.handleTodo}>
                    add
                  </button>
                </div>
              </div>
            </div>
            <div className="todo-container-c2">
              {" "}
              <div> {temp}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
