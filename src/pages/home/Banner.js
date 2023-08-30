import React from 'react';
import img from '../../assets/banner.png';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';
import { CiLocationArrow1 } from 'react-icons/ci';
import resume from '../../assets/cv.pdf';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Banner = () => {
    AOS.init({
        duration: 400,
        offset: 420,

    })
    return (
        <div className="mx-auto lg:w-3/4 2xl:w-2/4 border border-white" >
            <div data-aos="fade-right" className="hidden lg:block">
                <p className=" pl-2 lg:pl-0 text-start text-4xl lg:text-8xl font-thin mt-12 lg:mt-24" >HEY, I'M MD UMAID</p>
            </div>

            <div className=" hidden lg:flex lg:justify-between  lg:mt-4">
                <div className="lg:w-full lg:pl-0 " data-aos="fade-right">
                    <div className="">
                        <p className="text-start text-4xl lg:text-8xl font-thin  pl-2 lg:pl-0">HASAN</p>
                    </div>
                    <div className="mt-2 lg:mt-12">
                        <p className="text-start lg:text-2xl  pl-2 lg:pl-0">A teacher , researcher & a instructor  </p>
                        <div className="flex gap-2">
                            <a href="https://daffodilvarsity.edu.bd/" target="_blank" rel="noopener noreferrer">
                                <CiLocationArrow1 className="mt-2 text-blue-500"></CiLocationArrow1>
                            </a>
                            <p className="text-start lg:text-xl  pl-2 lg:pl-0">Daffodil International University</p>
                        </div>

                    </div>

                </div>
                <div className="w-full hidden lg:block image-section" data-aos="fade-left">
                    <img src={img} alt="" className="h-full w-full banner-image" />
                </div>
                <div className="mt-8 pl-2 pr-2 w-full block lg:hidden" >
                    <img src={img} alt="" className="h-full w-full banner-image" />
                </div>
            </div>

            {/* for small devices
 */}
            <div  className="lg:hidden block">
                <p className=" pl-2 lg:pl-0 text-start text-4xl lg:text-8xl font-thin mt-12 lg:mt-24" >HEY, I'M MD UMAID</p>
            </div>
            <div className="flex lg:hidden lg:justify-between  mt-4">
                <div className="lg:w-full lg:pl-0 " >
                    <div className="">
                        <p className="text-start text-4xl lg:text-8xl font-thin  pl-2 lg:pl-0">HASAN</p>
                    </div>
                    <div className="  mt-2 lg:mt-12">
                        <p className="text-start text-sm lg:text-2xl  pl-2 lg:pl-0">A teacher , researcher & a instructor  </p>
                        <div className="gap-2 hidden">
                            <a href="https://daffodilvarsity.edu.bd/" target="_blank" rel="noopener noreferrer">
                                <CiLocationArrow1 className="mt-2 text-blue-500"></CiLocationArrow1>
                            </a>
                            <p className="text-start lg:text-xl  pl-2 lg:pl-0">Daffodil International University</p>
                        </div>

                    </div>

                </div>
                <div className="w-full hidden lg:block image-section" data-aos="fade-left">
                    <img src={img} alt="" className="h-full w-full banner-image" />
                </div>
                <div className="pl-2 pr-2 w-full block lg:hidden" >
                    <img src={img} alt="" className="h-full w-full banner-image" />
                </div>
            </div>

        </div>
    );
};

export default Banner;