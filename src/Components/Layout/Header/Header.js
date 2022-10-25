import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './Header.css';
import img from '../../../Assets/logo/1666650716147.png'
import { FaUserCircle } from "react-icons/fa";


const Header = () => {
    return (
        <Navbar className='' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src={img}
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Brand> <Link style={{ textDecoration: 'none' }} to='/' className='nav-title'>EDUMA</Link> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='nav-items' to='/course-categories'>Courses</Link>
                        <Link className='nav-items' to="">Blog</Link>
                        <Link className='nav-items' to="">FAQ</Link>
                        {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    <Nav className='nav-items userIcon'>
                        <Link className='userIcon nav-items' >More deets</Link>
                        <Link className='userIcon nav-items' to='/login'>Login</Link>
                        <Link to='/login'> <FaUserCircle className='userIcon nav-items'></FaUserCircle> </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;