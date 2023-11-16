import logo from "./logo.svg";
import "./App.css";
import Mycomp from "./AddJob/Mycomp";
import TodoList from "./TodoList/TodoList";
import Nav from "./Nav/Nav";
import Home from "./Home/Home";
import listUser from "./ListUser/ListUser";
import Detail from "./DetailUser/Detail";

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <header className="App-header">
        {/* <Mycomp /> */}
        {/* <TodoList></TodoList> */}

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/todo" >
            <TodoList></TodoList>
          </Route>
          <Route exact path="/about" >
            <Mycomp></Mycomp>
          </Route>
          <Route exact path="/listUser" >
            <listUser></listUser>
          </Route>
          <Route exact path="/:id" >
            <Detail></Detail>
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
