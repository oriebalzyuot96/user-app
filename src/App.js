import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Switch, Route, Link } from "react-router-dom";
import CreateUser from "./components/create-user.component";
import EditUser from "./components/edit-user.component";
import ListUser from "./components/list-user.component";

function App() {
  return (
    <>
      <div className="App text-secondary">
        <header className="">
          <Navbar bg="dark" variant="dark">
            <Container>
              
              <Nav>
                <Nav className="justify-content-end">
                  <Link to={"/create-user"} className="nav-link">
                    <i className="fa fa-plus-square p-1"></i>Create User
                  </Link>
                </Nav>
                <Nav className="justify-content-end">
                  <Link to={"/list-user"} className="nav-link">
                    <i className="fa fa-list p-1"></i>User List
                  </Link>
                </Nav>
                
              </Nav>
            </Container>
          </Navbar>
        </header>
        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route exact path="/" component={CreateUser} />
                  <Route path="/create-user" component={CreateUser} />
                  <Route path="/edit-user/:id" component={EditUser} />
                  <Route path="/list-user" component={ListUser} />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
