import React from 'react';
import { Outlet } from 'react-router-dom';
import Courses from '../Courses';
import Header from '../Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Courses></Courses>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;