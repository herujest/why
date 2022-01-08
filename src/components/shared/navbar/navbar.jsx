import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const AppNavbar = () =>  {
  const menu = [
    { path: "home", title: "Home" },
    { path: "getting-started", title: "Get Started" },
    { path: "components", title: "Components" },
  ];

  return (
    <Navbar variant="dark" expand="lg" fixed="top" className="main-navbar">
      <Container>
        <Navbar.Brand href="#home">
          Wehelpyou
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-start"
        >
          <Nav onSelect={(item) => { 
            console.log("item", item);
           }}>
            {menu.map((i, index) => {
              return (
                <Nav.Item key={index}>
                  {/* <AnchorLink className="nav-link" href={`${i.path}`}>
                    {i.title}
                  </AnchorLink> */}
                  {/* <Link className="nav-link" to={`${i.path}`}> {i.title} </Link> */}
                  <Nav.Link >{i.title}</Nav.Link>
                </Nav.Item>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;