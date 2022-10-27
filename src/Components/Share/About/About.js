import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';

const About = () => {
    return (
        <div>
            <div className='background'>
                <Container>
                    <Row>
                        <Col lg="2"></Col>
                        <Col lg="8" className='text-center text-white pt-5'>
                            <h3>About Us</h3>
                            <p>
                                EDUMA is an online learning community where anyone can discover, take, or even teach a class. Anyone can join EDUMA to start watching online classes, create projects, and even become a teacher.
                                <br /> <br />

                                We started EDUMA to close the professional skills gap and provide universal access to high-quality learning. By teaching the skills needed in tomorrow's world, EDUMA empowers people to advance their careers, improve their lives, and pursue the work they love.
                                <br /> <br />

                                Students are able to engage with teachers and other students through project-based classes, where they'll walk through the process of creating something. We believe that learning by doing is the best way to gain new skills and expand your creativity. By the end of a project-based class, not only have you learned a new skill, but you have something awesome to show for it.
                                <br /> <br />

                                EDUMA classes are perfect for anyone who wants to learn new skills or explore their passions. Classes range from beginner to expert, with opportunities for novices to follow their curiosity and experts to hone their craft.
                                <br /> <br />

                                Interested? You can become a EDUMA student today!
                            </p>
                        </Col>
                        <Col lg="2"></Col>
                    </Row>
                </Container>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;