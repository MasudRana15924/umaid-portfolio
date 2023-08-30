import React from 'react';
import logo from '../../assets/logo.png'

const Loader = () => {
    return (
        <div className="w-2/4 lg:w-1/4 mx-auto mt-64 lg:mt-76">
            <img src={logo} alt="" className="mt-44"/>
            <div class="blob">
            
        </div>
        </div>
    );
};

export default Loader;