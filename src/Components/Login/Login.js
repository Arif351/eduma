import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Login = () => {

    const [error, setError] = useState('')

    const { LoginProvider, signIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.privateRoute?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        LoginProvider(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => setError(error.message))
    }


    return (
        <div className='bg'>
            <Row>
                <Col lg="3"></Col>
                <Col lg="6">
                    <Container className='text-white'>
                        <Form onSubmit={handleLogin} className='login-container'>
                            <h2 className='text-center '>Login</h2>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name='email' type="email" placeholder="Enter email" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="password" type="password" placeholder="Password" required />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                            <Form.Text className="text-danger mx-5">
                                {error}
                            </Form.Text>
                            <div className='mt-5 d-lg-flex align-items-center justify-content-center gap-3'>
                                <h5>Login with</h5>
                                <Button onClick={handleGoogleSignIn} variant="outline-primary" className='me-4'> <FaGoogle className='me-2'></FaGoogle> Google</Button>{' '}
                                <Button variant="outline-secondary"> <FaGithub className='me-2'></FaGithub> Github</Button>{' '}
                            </div>
                            <h6 className='text-white mt-3 text-center justify-content-center mt-4'>New in this website? <Link style={{ textDecoration: 'none' }} to='/registration'>Register Now</Link> </h6>
                        </Form>
                    </Container>

                </Col>
                <Col lg="3"></Col>
            </Row>
        </div>
    );
};

export default Login;