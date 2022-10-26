import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Catagory from "../../pages/Catagory/Catagory";
import Cources from "../../pages/Courses/Cources";
import Home from "../../pages/Home/Home";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/catagory/:id',
                element: <Catagory></Catagory>
            },
            {
                path: '/cources/:id',
                element: <Cources></Cources>
            },

        ]
    }
])