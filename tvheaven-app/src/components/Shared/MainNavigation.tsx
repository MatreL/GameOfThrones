import {FC} from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import {Link} from 'react-router-dom'

const MainNavigation:FC =() => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Game Of Thrones</Navbar.Brand>
            <Nav>
                <Nav.Link as={Link} to="/">All Characters</Nav.Link>
                <Nav.Link as={Link} to="create-characters">Create Character</Nav.Link>
                <Nav.Link as={Link} to="continents">Continent</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    )
}

export default MainNavigation;