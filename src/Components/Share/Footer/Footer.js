import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <Container>
                <Row>
                    <Col lg="4">
                        <strong>
                            <p>Contact</p>
                            <hr />
                            <Link className='contact'><h6><FaFacebook></FaFacebook> Facebook</h6></Link>
                            <Link className='contact'><h6><FaTwitter></FaTwitter> Twitter</h6></Link>
                            <Link className='contact'><h6><FaInstagram></FaInstagram> Instagram</h6></Link>
                            <Link className='contact'><h6><FaMailBulk></FaMailBulk> Mail</h6></Link>
                            <Link className='contact'><h6><FaPhone></FaPhone> Phone</h6></Link>
                        </strong>
                    </Col>
                    <Col lg="4">
                        <strong>
                            <p>Terms and Policy</p>
                            <hr />
                            <Link className='contact'><h6>Privacy</h6></Link>
                            <Link className='contact' to='/conditions'><h6>Conditions</h6></Link>
                            <Link className='contact'><h6>Cookies settings</h6></Link>
                            <Link className='contact'><h6>Accessibility Statement</h6></Link>
                        </strong>
                        <p>All Reserves</p>
                    </Col>
                    <Col lg="4">
                        <strong>
                            <p>Services</p>
                            <hr />
                            <Link className='contact' to='/'><h6>Home</h6></Link>
                            <Link className='contact' to='/course-categories'><h6>Courses</h6></Link>
                            <Link className='contact' to='/blog'> <h6>Blog</h6> </Link>
                            <Link className='contact' to='/about'><h6>About</h6> </Link>
                        </strong>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;