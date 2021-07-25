import React, { Component } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Container, Nav, Navbar } from "react-bootstrap";

export default class AppNavbar extends Component {
  constructor() {
    super();
    this.state = {
      menu: [
        { path: "home", title: "Home" },
        { path: "getting-started", title: "Get Started" },
        { path: "components", title: "Components" },
      ]
    };
  }

  render() {
    return (
      <Navbar variant="dark" expand="lg" fixed="top" className="main-navbar">
        <Container>
          <Navbar.Brand href="#home">
            Wehelpyou
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              {this.state.menu.map((i, index) => {
                return (
                  <Nav.Item key={index}>
                    <AnchorLink className="nav-link" href={`#${i.path}`}>
                      {i.title}
                    </AnchorLink>
                  </Nav.Item>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}