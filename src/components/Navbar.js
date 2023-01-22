import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/">WOOJINCHO98</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">홈</Nav.Link>
            <Nav.Link as={Link} to="/projects">프로젝트</Nav.Link>
        </Nav>
        </Navbar>
    );
    }

export default NavBar;