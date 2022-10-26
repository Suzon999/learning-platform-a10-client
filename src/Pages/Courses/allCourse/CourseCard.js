import React from 'react';
import { FaPaperPlane, FaRegHandPointRight, } from "react-icons/fa";
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    // console.log(course)
    return (
        <>
          
                <div className="card lg:w-96 bg-base-100 shadow-xl my-5">
                    <figure><img className='' src={course?.course_photo} alt="Shoes" /></figure>
                    <div className="card-body p-0 py-5 lg:p-8">
                        <h2 className="card-title text-blue-200 text-sm lg:text-2xl">
                             {course?.title}
                            <div className="badge badge-secondary">New</div>
                        </h2>
                        {
                            course.Paragrap.length > 20 ?
                            <>
                                <p className=''>{course?.Paragrap.slice(0, 50)}<span className='text-blue-300 cursor-pointer'> More..</span></p>
                                <div className="card-actions justify-center mt-3">
                                    <Link to={`/courses/${course?._id}`} className="btn btn-outline btn-success">Course Details <span className='pl-2 text-sm'> <FaPaperPlane></FaPaperPlane></span></Link>
                                </div>
                            </> : <p>heloo</p>

                        }
                   
                    </div>
                </div>
         
           
        </>
    );
};

export default CourseCard;