import React, { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Registration = () => {

    const [error, setError] = useState('')
    const [conditions, setConditions] = useState(false);
    const navigate = useNavigate();
    const { newUser, profileData } = useContext(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        newUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                updateProfileData(name, photoURL)
                navigate('/')
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const updateProfileData = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        profileData(profile)
            .then(() => { })
            .catch(error => console.error(error))


    }

    const handleConditions = (event) => {
        setConditions(event.target.checked)
    }



    return (
        <div className='bg'>
            <Row>
                <Col lg="3">
                </Col>
                <Col lg="6">
                    <Container className='text-white mb-5'>
                        <Form onSubmit={handleRegister} className='login-container'>
                            <h2 className='text-center '>Register Now</h2>
                            <Form.Group className="mb-3" controlId="formBasicEmail1">
                                <Form.Label>Name</Form.Label>
                                <Form.Control name="name" type="text" placeholder="Your Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail2">
                                <Form.Label>Image Link</Form.Label>
                                <Form.Control name="photoURL" type="text" placeholder="Profile Img Link" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail3">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name="email" type="email" placeholder="Enter email" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword4">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="password" type="password" placeholder="Password" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox5">
                                <Form.Check
                                    onClick={handleConditions}
                                    type="checkbox"
                                    label={<>Accept our <Link to='/conditions'>Terms and Conditions</Link> </>} />
                            </Form.Group>
                            <Button variant="primary" type="submit" disabled={!conditions}>
                                Register
                            </Button>
                            <Form.Text className="text-danger mx-5">
                                {error}
                            </Form.Text>
                            <h6 className='text-white mt-3'>Already have an Account? <Link style={{ textDecoration: 'none' }} to='/login'>Login Now</Link> </h6>
                        </Form>
                    </Container>
                </Col>
                <Col lg="3">
                </Col>
            </Row>
        </div >
    );
};

export default Registration;