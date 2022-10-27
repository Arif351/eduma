import { createBrowserRouter } from "react-router-dom";
import CourseCategory from "../CourseCategory/CourseCategory";
import Home from "../Home/Home";
import Main from "../Layout/Main/Main";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";
import About from "../Share/About/About";
import Conditions from "../Share/Conditions";
import DetailCourse from "../Share/DetailCourse";
import Faq from "../Share/FAQ/Faq";
import Leftside from "../Share/Leftside";
import NotFound from "../Share/NotFound/NotFound";
import PrivateRoute from "./PrivateRoute";

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
                path: '/course-categories',
                element: <Leftside></Leftside>
            },
            {
                path: '/courseDetails/:id',
                element: <PrivateRoute><DetailCourse></DetailCourse></PrivateRoute>,
                loader: ({ params }) => fetch(`https://server-arif351.vercel.app/courseDetails/${params.id}`)
            },
            {
                path: '/category/:id',
                element: <CourseCategory></CourseCategory>,
                loader: ({ params }) => fetch(`https://server-arif351.vercel.app/category/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/conditions',
                element: <Conditions></Conditions>
            },
            {
                path: '/blog',
                element: <Faq></Faq>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/*',
                element: <NotFound></NotFound>
            }
        ]

    }
])