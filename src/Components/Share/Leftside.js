import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Leftside = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='background'>
            <Container>
                <h2 className='mt-'>Course Categories</h2>
                {
                    categories.map(category => <h5
                        key={category.id}>
                        <Link className='category-list' to={`/course-categories/${category.id}`} >{category.name}</Link>
                    </h5>)
                }
            </Container>
        </div>
    );
};

export default Leftside;