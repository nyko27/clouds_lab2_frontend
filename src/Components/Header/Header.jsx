import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav style={{ marginLeft: "7%" }} className="mr-auto">
          <h1 className="title">Awesome Movies</h1>
          <NavLink to="/movies/add" className='nav_link' style={{ marginTop: "8px", marginLeft: "550px" }}  exact={true}>
            Add movie
          </NavLink>
        </Nav>

        <Nav >
          <NavLink to="/actors/add" className='nav_link' activeClassName="nav_link_active" exact={true}>
            Add actor
          </NavLink>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}