import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
class Nav extends React.Component {
  render() {
    return (
      <>
        <div className="topnav">
          <NavLink activeClassName="active" to="/" exact="true">home</NavLink>
          <NavLink activeClassName="active" to="/about">about</NavLink>
          <NavLink activeClassName="active" to="/todo">todo</NavLink>
          <NavLink activeClassName="active" to="/listUser">ListUser</NavLink>
        </div>
      </>
    );
  }
}
export default Nav;
