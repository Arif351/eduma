import React from 'react';
import img from '../../Assets/home page/home2.png'
import './Home.css'

const Home = () => {
    return (
        <div>
            <img className='w-100 d-none d-lg-block' src={img} alt="" />
        </div>
    );
};

export default Home;