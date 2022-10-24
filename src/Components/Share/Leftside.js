import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Leftside = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h2>Course Categories</h2>
            {
                categories.map(category => <h5
                    key={category.id}>
                    <Link style={{ textDecoration: 'none' }}
                        to={`/course-categories/${category.id}`} >{category.name}</Link>
                </h5>)
            }
        </div>
    );
};

export default Leftside;