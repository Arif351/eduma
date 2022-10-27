import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from './Footer/Footer';

const Leftside = () => {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://server-arif351.vercel.app/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])


    return (
        <div>
            <div className='background'>
                <Container className='text-center'>
                    <Row>
                        <Col lg="3">
                        </Col>
                        <Col lg="6">
                            <h5 className='text-white mt-5'>Course Categories</h5>
                            {
                                categories.map(category => <h5
                                    key={category._id}>
                                    <div className='category-list mt-3'> <Link className='category-list2' to={`/category/${category.id}`}>
                                        {category.name}</Link></div>
                                </h5>)
                            }
                        </Col>
                        <Col lg="3">
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Leftside;