import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='bg'>
            <Container className='text-white'>
                <Form className='login-container'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    <div className='mt-4 d-lg-flex align-items-center justify-content-center gap-3'>
                        <h5>Login with</h5>
                        <Button variant="outline-primary"> <FaGoogle className='me-2'></FaGoogle> Google</Button>{' '}
                        <Button variant="outline-primary"> <FaGithub className='me-2'></FaGithub> Github</Button>{' '}
                    </div>
                    <h6 className='text-white mt-3 text-center justify-content-center mt-4'>New in this website? <Link style={{ textDecoration: 'none' }} to='/registration'>Register Now</Link> </h6>
                </Form>
            </Container>
        </div>
    );
};

export default Login;