import logo from "./logo.svg";
import "./App.css";
import Mycomp from "./AddJob/Mycomp";
import TodoList from "./TodoList/TodoList";
import Nav from "./Nav/Nav";
import Home from "./Home/Home";
import listUser from "./ListUser/ListUser";
import Detail from "./DetailUser/Detail";

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <header className="App-header">
        {/* <Mycomp /> */}
        {/* <TodoList></TodoList> */}

        <Routes>
          <Route exact path="/" Component={Home}></Route>
          <Route exact path="/todo" Component={TodoList}></Route>
          <Route exact path="/about" Component={Mycomp}></Route>
          <Route exact path="/listUser" Component={listUser}></Route>
          <Route exact path="/:id" Component={Detail}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
