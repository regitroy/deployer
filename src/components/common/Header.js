import React, { Component } from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return ( 
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">Deployer</Navbar.Brand>
            </Navbar>
        );
    }
}
 
export default Header;