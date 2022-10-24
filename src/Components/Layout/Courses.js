import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Leftside from '../Share/Leftside';
import RightSide from '../Share/RightSide';

const Courses = () => {
    return (
        <Container>
            <Row>
                <Col lg="5">
                    <Leftside></Leftside>
                </Col>
                <Col lg="7">
                    <RightSide></RightSide>
                </Col>
            </Row>
        </Container>
    );
};

export default Courses;