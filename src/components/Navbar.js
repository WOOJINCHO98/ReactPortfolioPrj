import React, {useState} from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from "react-bootstrap/Container";
import {Link} from 'react-router-dom';
import {BiBookBookmark} from "react-icons/bi";
import {IoHandRight} from "react-icons/io5";
import {TfiStackOverflow} from "react-icons/tfi";
import {MdOutlineDocumentScanner} from "react-icons/md";

function NavBar() {

    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            updateNavbar(true);
        } else {
            updateNavbar(false);
        }
    }

    window.addEventListener("scroll", scrollHandler);

    return (
        <Navbar
            expanded={expand}
            fixed="top"
            expand="md"
            className={navColour
                ? "sticky"
                : "navbar"}>
            <Container>

                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    onClick={() => {
                        updateExpanded(
                            expand
                                ? false
                                : "expanded"
                        );
                    }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto" defaultActiveKey="#home">
                        <Nav.Item>
                            <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                                <IoHandRight
                                    style={{
                                        marginBottom: "2px"
                                    }}/>
                                Me
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link as={Link} to="/skills" onClick={() => updateExpanded(false)}>
                                <TfiStackOverflow
                                    style={{
                                        marginBottom: "2px"
                                    }}/>
                                Skills
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link as={Link} to="/projects" onClick={() => updateExpanded(false)}>
                                <BiBookBookmark
                                    style={{
                                        marginBottom: "2px"
                                    }}/>{" "}
                                Projects
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link as={Link} to="/resume" onClick={() => updateExpanded(false)}>
                                <MdOutlineDocumentScanner
                                    style={{
                                        marginBottom: "2px"
                                    }}/>
                                Resume
                            </Nav.Link>
                        </Nav.Item>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;