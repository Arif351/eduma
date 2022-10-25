import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RightSide from '../Share/RightSide';
import Card from './Card';

const CourseCategory = () => {
    const coursesData = useLoaderData()
    return (
        <div>
            <h2>DATA  {coursesData.length}</h2>
            {
                coursesData.map(course => <RightSide
                    key={course.id}
                    course={course}
                ></RightSide>)
            }
        </div>
    );
};

export default CourseCategory;