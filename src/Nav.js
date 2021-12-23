import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.css';


function Navi() {
    return(
        <Navbar bg="danger">
            <Container>
                <Navbar.Brand href="#home">Tavis</Navbar.Brand>
                <Nav.Link href="#home"> <img src="./logo.svg" class="img-fluid" alt=""/> </Nav.Link>
            </Container>
        </Navbar>
    );
}

export default Navi;