import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const DetailCourse = () => {
    const courseInfo = useLoaderData();
    const { title, details, coverImg, about, mentorImg, mentor, courseDuration, rating, id } = courseInfo;

    return (
        <div className='background'>
            <Container>
                <Row>
                    <Col lg="3"></Col>
                    <Col lg="6" className='mt-5'>
                        <Card>
                            <Card.Img variant="top" src={coverImg} />
                            <Card.Body>
                                <div className='d-lg-flex justify-content-between mt-3'>
                                    <Card.Title>{title}</Card.Title>
                                    <Button variant="success">Pdf</Button>{' '}
                                </div>
                                <hr className='text-secondary'></hr>
                                <Card.Text>
                                    {details}
                                </Card.Text>
                                <hr className='text-secondary'></hr>
                                <div className='d-lg-flex justify-content-between mt-3'>
                                    <div>
                                        <Image className='mentor-img'
                                            src={mentorImg}></Image>
                                        <p>{mentor}</p>
                                    </div>
                                    <div>
                                        <Link to='/course-categories'><Button variant="outline-success">Back to courses</Button>{' '}</Link>
                                    </div>
                                    <div>
                                        <p>Duration: {courseDuration}</p>
                                        <p>Rating: {rating}</p>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg="3"></Col>
                </Row>
            </Container>
        </div>
    );
};

export default DetailCourse;