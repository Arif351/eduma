import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Footer from '../Share/Footer/Footer';
import Leftside from '../Share/Leftside';
import RightSide from '../Share/RightSide';

const CourseCategory = () => {
    const coursesData = useLoaderData()
    return (
        <div>
            <div className='background'>
                <Container>
                    <Row>
                        <Col lg="6">
                            <Leftside></Leftside>
                        </Col>
                        <Col lg="6">
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
            <Footer></Footer>
        </div>
    );
};

export default CourseCategory;