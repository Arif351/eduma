import React from 'react';
import './Toggle.css'
import cx from 'classnames'

const Toggle = () => {

    return (
        <div>
            <label className='switch'>
                <input type="checkbox" />
                <span className="slider">
                </span>
            </label>
        </div>
    );
};

export default Toggle;