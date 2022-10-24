import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';
import Courses from '../Courses';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Courses></Courses>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;