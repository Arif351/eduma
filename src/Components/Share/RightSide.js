import React from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const RightSide = ({ course }) => {
    const { coverImg, title, about, details, mentor, mentorImg, courseDuration, rating } = course;
    console.log(course);
    return (
        <div>

            <Container lg="6">
                <Card className="mb-5 xs={1} md={2}" >
                    <Card.Header>{title} </Card.Header>
                    <Card.Img className='w-100' variant="top" src={coverImg} />
                    <Card.Body>
                        <Card.Title>{about}</Card.Title>
                        <Card.Text>
                            {details.length > 250 ?
                                <p> {details.slice(0, 250) + '...'} <Link to={`/courseDetails/`}> more about Course</Link>
                                </p> : <p>{details}</p>}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">

                    </Card.Footer>
                </Card>
            </Container>
        </div>
    );
};

export default RightSide;