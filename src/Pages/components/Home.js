import React from 'react';
import { Link } from 'react-router-dom';
import CeoPhot from '../../assent/images/raselkhanbackground.png'

const Home = () => {
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100 lg:px-20 px-5">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-4xl font-bold leading-none sm:text-4xl lg:text-6xl"> <span className="dark:text-amber-600">Web</span>-Tecnology
                            <br /> <p className='py-3 text-amber-600 '> Platfrom 2<span className="text-amber-600">0</span>2<span className="text-amber-600">2</span></p>
                        </h1>
                        <p className="mt-6 mb-8 text-lg lg:text-3xl sm:mb-12">Mr.Sundor Pichai <span className='text-amber-500'>CEO</span>

                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <Link to='/courses' rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Our Courses</Link>
                            <a rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Sundar_Pichai" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">About Ceo</a>
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-69 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src='https://img.freepik.com/premium-vector/web-development-application-design-illustration-pink-background_145666-1338.jpg?w=900' alt="" className="object-contain h-72 sm:h-80 lg:h-96  xl:h-112 2xl:h-128 rounded-full" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;