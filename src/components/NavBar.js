import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom";
import { Navbar, Nav, Image, Container } from "react-bootstrap";

export default class NavBar extends Component {
    render() {
        return (
            <>
                <Navbar bg="light" expand="lg">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">DashBoard</Nav.Link>
                        <Nav.Link href="#link">Details</Nav.Link>
                        <Nav.Link href="#link">Add</Nav.Link>
                    </Nav>
                </Navbar>
            </>
        )
    }
}
