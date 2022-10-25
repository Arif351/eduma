import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const RightSide = ({ course }) => {
    const { cover, title, about, details, mentor, mentorImg, courseDuration, rating } = course;
    return (
        <Card className="text-center mb-5">
            <Card.Header>{title}</Card.Header>
            <Card.Body>
                <Card.Title>{about}</Card.Title>
                <Card.Text>

                    {details.length > 250 ?
                        <p> {details.slice(0, 250) + '...'} <Link to={`/courseDetails/`}> more about Course</Link>
                        </p> : <p>{details}</p>}

                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted"></Card.Footer>
        </Card>
    );
};

export default RightSide;