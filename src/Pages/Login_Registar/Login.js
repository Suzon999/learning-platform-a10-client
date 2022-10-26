import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
    const { userSingInWithEmailPassword, googleAutoLogIn, gitHubAutoLogIn, user } = useContext(AuthContext)
    //error show display
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    //location part 
    const navigat = useNavigate()
    const location = useLocation()
    const froms = location?.state?.from?.pathname || '/';
    // console.log(froms);


    const handelLogInBtn = (event) => {

        event.preventDefault()

        const password = event.target.Password.value;
        const email = event.target.email.value;

        // Sing In part
        userSingInWithEmailPassword(email, password)
            .then(result => {
                navigat(froms, { replace: true })
            }).catch(error => console.log(error))

        setTimeout(() => {
            if (!password) {
                return setSuccess("You are success fully Log in ..")
            } else {
                return setError("Did't match you Password !")
            }
        }, 500)

    }

    //google auto log in part
    const googleBtnAutoLogIn = () => {
        googleAutoLogIn()
            .then(restult => {
                console.log('your are success Auto logIn in Google');
                navigat(froms, { replace: true })
            }).catch(error => console.log(error))
    }
    //Ghithub auto log in part
    const githubAutoLogIN = () => {
        gitHubAutoLogIn()
            .then(result => {
                navigat(froms, { replace: true })
            }).catch(error => console.log(error))
    }

    useEffect(() => {
        if (user) {
            navigat(froms, { replace: true })
        }
    }, [user])




    return (
        <div className='flex justify-center items-center pt-8 mx-5'>
            <div className='flex flex-col max-w-md px-6 py-2 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
                <div className='mb-8 text-center'>
                    <h1 className='my-3 text-4xl font-bold'><span className='text-amber-700'>Si</span>ng in</h1>
                    <p className='text-sm text-gray-400'>
                        Sign in to access your account
                    </p>
                </div>
                <form onSubmit={handelLogInBtn}
                    noValidate=''
                    action=''
                    className='space-y-2 ng-untouched ng-pristine ng-valid'
                >
                    <div className='space-y-4'>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Email address
                            </label>
                            <input
                                // onBlur={(event) => setUserEmail(event.target.value)}
                                type='email'
                                name='email'
                                id='email'
                                placeholder='Enter Your Email Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900'
                                required data-temp-mail-org='0'
                            />
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <label htmlFor='password' className='text-sm mb-2'>
                                    Password
                                </label>
                            </div>
                            <input
                                type='password'
                                name='Password'
                                id='password'
                                placeholder='*******'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:border-gray-900 text-gray-900'
                                required />
                        </div>
                    </div>

                    <p className='text-center text-red-400 text-sm pb-1'>{error}</p><p className='text-center text-green-500 text-xs pb-1'>{ }</p>

                    <div>
                        <button
                            type='submit'
                            className='w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100'
                        >
                            Sign in
                        </button>
                    </div>
                </form>
                {/* ------------form field ending------- */}
                <div className='space-y-1'>
                    <button className='text-xs hover:underline text-gray-400'>
                        Forgot password?
                    </button>
                </div>
                <div className='flex items-center pt-4 space-x-1'>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                    <p className='px-3 text-sm dark:text-gray-400'>
                        Login with social accounts
                    </p>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                </div>
                <div className='flex justify-center space-x-4'>

                    <button onClick={googleBtnAutoLogIn} aria-label='Log in with Google' className='p-3 rounded-sm'>
                        <h1 className='text-2xl'><FaGoogle></FaGoogle></h1>
                    </button>

                    <button aria-label='Log in with Facbook' className='p-3 rounded-sm'>
                        <h1 className='text-3xl text-blue-700'><FaFacebook></FaFacebook></h1>
                    </button>

                    <button onClick={githubAutoLogIN} aria-label='Log in with GitHub' className='p-3 rounded-sm'>
                        <h1 className='text-2xl'><FaGithub></FaGithub></h1>
                    </button>
                </div>
                <p className='px-6 text-sm text-center text-gray-400'>
                    Don't have an account yet?{' '}
                    <Link to='/registration' href='#' className='hover:underline text-gray-600'>
                        Sign up
                    </Link>
                    .
                </p>
            </div>
        </div>
    );
};

export default Login;