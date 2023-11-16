import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
class Nav extends React.Component {
  render() {
    return (
      <>
        <div className="topnav">
          <NavLink to="/">home</NavLink>
          <NavLink to="/about">about</NavLink>
          <NavLink to="/todo">todo</NavLink>
          <NavLink to="/listUser">ListUser</NavLink>
        </div>
      </>
    );
  }
}
export default Nav;
