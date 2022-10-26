import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCard from './CourseCard';

const AllCourse = () => {

    const [courses, setCourse] = useState([]);
    useEffect(() => {

        fetch('http://localhost:5000/course')
            .then(result => result.json())
            .then(data => setCourse(data))

    }, [])

    return (
        
        <div className='flex'>
            {/* <div>Hello {courses.length}</div> */}
            {/* ---------card------ */}
            <div className="container  mt-6 mx-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                    {
                        courses.map(courses => <CourseCard course={courses} key={courses._id}></CourseCard>)
                    }

                </div>
            </div>
            {/* -----------Right side nav--------------- */}

            <div className='bg-gray-800 text-white px-5 lg:px-10'>
                {
                    courses.map(courses =>
                        <button key={courses._id} className="  block py-3 my-1 rounded-sm mx-auto">
                            <Link key={courses._id} className='text-decoration-none text-white' to={`/courses/${courses?._id}`}>
                                {courses?.name}</Link>
                        </button>

                    )
                }


            </div>

        </div>



    );
};

export default AllCourse;