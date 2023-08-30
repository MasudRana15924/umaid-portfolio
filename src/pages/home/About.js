import React from 'react';
import img from '../../assets/banner.png';
import diu from '../../assets/diu.png';
import college from '../../assets/college.png';
import school from '../../assets/school.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ABout = () => {
    AOS.init({
        duration: 400,
        offset: 420,

    })
    return (
        <div className="mx-auto lg:w-3/4 2xl:w-2/4 border border-white mt-12 lg:mt-24 " >
            <div className="lg:flex lg:justify-between  lg:mt-4">
                <div className="w-full hidden lg:block image-section" data-aos="fade-left">
                    <img src={img} alt="" className="h-full w-full banner-image" />
                </div>
                <div className="mt-8 pl-2 pr-2 w-full block lg:hidden" >
                    <img src={img} alt="" className="h-full w-full banner-image" />
                </div>
                <div className="lg:w-full lg:pl-5 " data-aos="fade-right">
                    <div className="">
                        <p className="text-start text-4xl lg:text-5xl font-thin  pl-2 lg:pl-0">ABOUT ME</p>
                        <p className="text-start text-md lg:text-xl font-thin  pl-2 lg:pl-0 mt-4 w-full">I am a dedicated and passionate university lecturer with a strong commitment to fostering an engaging and inclusive learning environment</p>
                        <p className="text-start text-md lg:text-xl font-thin  pl-2 lg:pl-0 mt-4 w-full">With <span className="text-blue-500 text-2xl font-bold">2</span> years of experience in higher education, I have had the privilege of inspiring and guiding students in the field of technology . </p>
                    </div>
                </div>
            </div>
            
            <section class="timeline-section mt-12">
                <p className="text-start text-4xl lg:text-5xl font-thin  pl-2 lg:pl-0 mb-12">Educational Background</p>
                <div className="timeline-items ">
                    <div class="timeline-item" data-aos="fade-right">
                        <div class="timeline-dot"></div>
                        <div class="timeline-date">2019</div>
                        <div class="timeline-content  border-l-2 border-b-2 border-red-500">
                            <h3>Bachelor in CSE</h3>
                            <div className="flex lg:ml-40">
                                <img src={diu} alt="" className="h-12 w-12" />
                                <p className="text-start mt-4 ml-2">Daffodil International University</p>
                            </div>

                            <p className="mt-2">Birulia,Ashulia,Savar,Dhaka</p>
                        </div>
                    </div>
                    <div class="timeline-item" data-aos="fade-left">
                        <div class="timeline-dot"></div>
                        <div class="timeline-date">2015</div>
                        <div class="timeline-content border-r-2 border-b-2 border-violet-500">
                            <h3 className="text-start">HSC in Science </h3>
                            <div className="flex ">
                                <img src={college} alt="" className="h-12 w-10 rounded-lg" />
                                <p className="text-start mt-4 ml-2">Syed Nazrul Islam College , Mymensingh</p>
                            </div>
                            <p className="text-start lg:ml-2">Town Hall Mor, Mymensingh </p>
                        </div>
                    </div>
                    <div class="timeline-item" data-aos="fade-right">
                        <div class="timeline-dot"></div>
                        <div class="timeline-date">2013</div>
                        <div class="timeline-content border-l-2 border-b-2 border-blue-500">
                            <h3>SSC in Science </h3>
                            <div className="flex lg:ml-36">
                                <img src={school} alt="" className="h-12 w-12 border rounded-full" />
                                <p className="text-start mt-4 ml-2">Nabarun Public School </p>
                            </div>
                            <p>Sherpur Sadar</p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default ABout;