import React from "react";
import { NavLink } from "react-router-dom"
import { Nav, Container, Navbar as NavbarTop } from 'react-bootstrap'


function Navbar() {
    return (
        <>
            <NavbarTop sticky="top" variant="dark" bg="dark" style={{ height:80 }}>
                <Container>
                    <Nav className="me auto">
                        <Nav.Link to="/" as={NavLink}>
                            Home
                        </Nav.Link>
                        <Nav.Link to="/skills" as={NavLink}>
                            Skills
                        </Nav.Link>
                        <Nav.Link to="/productivity" as={NavLink}>
                            Productivity
                        </Nav.Link>
                        <Nav.Link to="/history" as={NavLink}>
                            History
                        </Nav.Link>
                        <Nav.Link to="/settings" as={NavLink}>
                            Settings
                        </Nav.Link>
                    </Nav>
                </Container>
            </NavbarTop>
        </>
    )
}

export default Navbar;



