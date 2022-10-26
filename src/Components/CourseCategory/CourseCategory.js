import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Leftside from '../Share/Leftside';
import RightSide from '../Share/RightSide';
import Card from './Card';

const CourseCategory = () => {
    const coursesData = useLoaderData()
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="5">
                        <Leftside></Leftside>
                    </Col>
                    <Col lg="7">
                        {
                            coursesData.map(course => <RightSide
                                key={course.id}
                                course={course}
                            ></RightSide>)
                        }
                    </Col>
                </Row>
            </Container>






        </div>
    );
};

export default CourseCategory;