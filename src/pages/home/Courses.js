import React from 'react';

const Courses = () => {
    return (
        <div className="lg:w-3/4 mx-auto 2xl:w-2/4 mt-12  lg:mt-24 mb-44" >

            <div className="lg:w-3/4 mx-auto">
            <p className="text-start mt-6 text-xl ">My Online Courses</p>
                <video width="320" height="240" controls className="w-3/4 lg:w-full mx-auto mt-12">
                    <source src="https://www.youtube.com/watch?v=zLu1HBkIaKI" type="video/ogg" />
                </video>

                <div>
                <p className="text-start mt-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium non repudiandae sapiente reiciendis dolores magni facere, aspernatur ut rem laboriosam. A, quibusdam. Quidem laudantium modi officia, eius vel perspiciatis suscipit!</p>
                <p className="text-start mt-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium non repudiandae sapiente reiciendis dolores magni facere, aspernatur ut rem laboriosam. A, quibusdam. Quidem laudantium modi officia, eius vel perspiciatis suscipit!</p>
                </div>
            </div>
        </div>
    );
};

export default Courses;