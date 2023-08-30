import React from 'react';
import img from '../../assets/tech.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Education = () => {
    AOS.init({
        duration: 400,
        offset: 420,

    })
    return (
        <div className="lg:w-3/4 mx-auto 2xl:w-2/4 border border-white  mt-12 lg:mt-24 mb-48" >
            <div className="lg:flex lg:justify-between  lg:mt-4">
                <div className="w-full hidden lg:block image-section" data-aos="fade-left">
                    <img src={img} alt="" className="h-full w-full banner-image" />
                </div>
                <div className="mt-8 pl-2 pr-2 w-full block lg:hidden" >
                    <img src={img} alt="" className="h-full w-full banner-image" />
                </div>
                <div className="lg:w-full lg:pl-5 " data-aos="fade-right">
                    <div className="">
                        <p className="text-start text-4xl lg:text-5xl font-thin  pl-2 lg:pl-0 w-full mb-12">Teaching Philosophy </p>
                        <p className="text-start text-md lg:text-xl font-thin  pl-2 lg:pl-0 mt-4 w-full"> <span className="font-bold">
                            Student-Centered Learning:</span>  I view my role as a facilitator of knowledge rather than a mere dispenser of facts. </p>
                        <p className="text-start text-md lg:text-xl font-thin  pl-2 lg:pl-0 mt-4 w-full"> <span className="font-bold">
                        Holistic Development::</span>  I view my role as a facilitator of knowledge rather than a mere dispenser of facts. </p>
                        <p className="text-start text-md lg:text-xl font-thin  pl-2 lg:pl-0 mt-4 w-full"> <span className="font-bold">
                        Active Learning and Engagement:</span>  I view my role as a facilitator of knowledge rather than a mere dispenser of facts. </p>
                        <p className="text-start text-md lg:text-xl font-thin  pl-2 lg:pl-0 mt-4 w-full"> <span className="font-bold">
                        Feedback and Growth:</span>  I view my role as a facilitator of knowledge rather than a mere dispenser of facts. </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Education;