import React from "react";
import Crud from "./Crud";

class TodoList extends React.Component {
  state = {
    input: "",
    arrayDoList: [
      { id: "123", todo: "study" },
      { id: "124", todo: "learn" },
      { id: "125", todo: "work" },
    ],
  };

  handleOnChangeInput = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  handleOnClickAdd = () => {
    if (!this.state.input) {
      alert("please input");
      return;
    }
    this.setState({
      arrayDoList: [
        ...this.state.arrayDoList,
        { id: Math.floor(Math.random() * 1000), todo: this.state.input },
      ],
      input: "",
    });
  };

  deleteWork = (work) => {
    this.setState({
      arrayDoList: this.state.arrayDoList.filter((item) => item.id !== work.id),
    });
  };
  editWork = (work) => {
    console.log("cha:", work);
    let arr = this.state.arrayDoList;

    arr.map((a) => (a.id === work.id ? (a.todo = work.todo) : a));
    // arr = arr.filter((item) => item.id !== work.id);
    // arr = [...arr, work];

    this.setState({
      arrayDoList: arr,
    });
    console.log("cha:", this.state);
  };

  render() {
    return (
      <>
        <div>
          <input
            value={this.state.input}
            onChange={(event) => this.handleOnChangeInput(event)}
          ></input>
          <button onClick={() => this.handleOnClickAdd()}>add</button>
        </div>
        <Crud
          arrayDoList={this.state.arrayDoList}
          deleteWork={(work) => this.deleteWork(work)}
          updateChangeEdit={(work) => this.editWork(work)}
        ></Crud>
      </>
    );
  }
}
export default TodoList;
