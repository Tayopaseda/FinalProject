import {Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Banner = () => {

    return(
        <>
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Group 2</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Link to="/">
                    <Button variant="info">Tickets</Button>
                </Link>
                <Link to="/Cohorts">
                    <Button variant="info">Cohorts</Button>
                </Link>
                <Link to="/Solutions">
                    <Button variant="info">Solutions</Button>
                </Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        </>
    );
}

export default Banner;