import { createBrowserRouter } from "react-router-dom";
import Main from '../Layouts/Main'
import AllCourse from "../Pages/Courses/allCourse/AllCourse";
import Cheakout from "../Pages/Courses/CheakOut/ChackOut";
import Course_Details from "../Pages/Courses/Course_Details/Course_Details";
import Home from '../Pages/components/Home'
import Registrar from "../Pages/Login_Registar/Registrar";
import Login from "../Pages/Login_Registar/Login";
import ErrorPages from "../Pages/ErrorPagess/ErrorPages";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import Block from "../Pages/components/Block";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPages></ErrorPages>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <AllCourse></AllCourse>
            },

            {
                path: '/courses/:id',
                element: <Course_Details></Course_Details>,
                loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)

            },
            {
                path: '/block',
                element: <Block></Block>
            },
          
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registrar></Registrar>
            },
            {
                path: '/course_details',
                element: <Course_Details></Course_Details>
            },
            {
                path: '/chackout',
                element: (
                    <PrivetRoute>
                        <Cheakout></Cheakout>
                    </PrivetRoute>
                ) 
            }
        ]
    }
])

