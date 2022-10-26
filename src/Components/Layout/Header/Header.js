import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './Header.css';
import img from '../../../Assets/logo/1666650716147.png'
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from '../../Context/AuthProvider';
import { Button, Image } from 'react-bootstrap';


const Header = () => {

    const { user, logout } = useContext(AuthContext);
    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(error => console.error(error))
    }

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
                    </Nav>
                    {/* <Nav className='nav-items userIcon'>
                        <Link className='userIcon nav-items text-white'></Link>

                        {
                            user && user?.photoURL ? <Image style={{ height: "40px" }} roundedCircle src={user.photoURL}></Image> &&
                                <Link className='userIcon nav-items'>
                                    <Button variant="secondary">Logout</Button>{' '}</Link> :

                                <div>
                                    <Link className='userIcon nav-items' to='/login'>
                                        <Button variant="secondary">Login</Button>{' '}</Link>
                                    <FaUserCircle className='userIcon nav-items'></FaUserCircle>
                                </div>
                        }

                    </Nav> */}
                    <Nav>
                        <Nav.Link href="#deets">
                            {
                                user && user.uid ?
                                    <Link className='userIcon nav-items' to='/'>
                                        <Button onClick={handleLogout} variant="secondary">Logout</Button> </Link>
                                    :
                                    <Link className='userIcon nav-items' to='/login'>
                                        <Button variant="secondary">Login</Button> </Link>
                            }

                        </Nav.Link>
                        <Nav.Link>
                            {
                                user?.photoURL ? <Image style={{ height: "40px" }} roundedCircle src={user.photoURL} data-toggle="tooltip" data-placement="bottom" title={user.displayName}></Image> :
                                    <FaUserCircle className='userIcon nav-items'></FaUserCircle>
                            }

                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;