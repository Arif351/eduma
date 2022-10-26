import React from 'react';
import { Badge, Button, Container, Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const RightSide = ({ course }) => {
    const { coverImg, title, about, details, mentor, mentorImg, courseDuration, rating, id } = course;
    console.log(course);
    return (
        <div>
            <Container lg="">
                <Card className="mb-5 xs={1} md={2}" >
                    <Card.Header> <h3 className='text-center'>{title}</h3> </Card.Header>
                    <Card.Img className='w-100' variant="top" src={coverImg} />
                    <Card.Body>
                        <Card.Title>{about}</Card.Title>
                        <Card.Text>
                            {details.length > 250 ?
                                <p> {details.slice(0, 250) + '...'} <Link to={`/courseDetails/${id}`}><Badge bg="success">see more</Badge></Link>
                                </p> : <p>{details}</p>}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="">
                        <div className='d-lg-flex justify-content-between mt-3'>
                            <div>
                                <Image className='mentor-img'
                                    src={mentorImg}></Image>
                                <p>{mentor}</p>
                            </div>
                            <div>
                                <Link to='/login'><Button variant="outline-success">Get premium access</Button>{' '}</Link>
                            </div>
                            <div>
                                <p>Duration: {courseDuration}</p>
                                <p>Rating: {rating}</p>
                            </div>
                        </div>
                    </Card.Footer>
                </Card>
            </Container>
        </div>
    );
};

export default RightSide;