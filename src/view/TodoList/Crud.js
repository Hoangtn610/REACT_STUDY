import React from "react";
import "./Todo.css";
class Crud extends React.Component {
  state = {
    workEditId: "",
    todo: "",
  };

  handleClickDelete = (work) => {
    this.props.deleteWork(work);
  };

  handleClickEdit = (work) => {
    this.setState({
      workEditId: work.id,
      todo: work.todo,
    });
    return;
  };

  handleOnChangeEditWork = (event) => {
    this.setState({
      todo: event.target.value,
    });
  };
  handleKeyDown = (event) => {
    if (event.key === "Enter") {
      this.props.updateChangeEdit({
        id: this.state.workEditId,
        todo: this.state.todo,
      });
      //console.log(this.state);
      this.setState({
        workEditId: "",
        todo: "",
      });
      console.log("do validate");
    }
  };
  showToDoList = (work) => {
    if (this.state.workEditId === work.id) {
      return (
        <div className="todo">
          <input
            type="text"
            value={this.state.todo}
            onChange={(event) => this.handleOnChangeEditWork(event)}
            onKeyDown={(event) => this.handleKeyDown(event)}
          ></input>
          <button onClick={() => this.handleClickEdit(work)}> edit</button>
          <button onClick={() => this.handleClickDelete(work)}> delete</button>
        </div>
      );
    } else {
      return (
        <div className="todo" key={work.id}>
          {work.todo}
          &nbsp;
          <button onClick={() => this.handleClickEdit(work)}> edit</button>
          &nbsp;
          <button onClick={() => this.handleClickDelete(work)}> delete</button>
        </div>
      );
    }
  };

  render() {
    let toDoList = this.props.arrayDoList;
    return <>{toDoList.map((work) => this.showToDoList(work))}</>;
  }
}
export default Crud;
