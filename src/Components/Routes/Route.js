import { createBrowserRouter } from "react-router-dom";
import CourseCategory from "../CourseCategory/CourseCategory";
import Home from "../Home/Home";
import Courses from "../Layout/Courses";
import Main from "../Layout/Main/Main";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";
import Leftside from "../Share/Leftside";
import RightSide from "../Share/RightSide";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                // loader: () => fetch('http://localhost:5000/allCourses')
            },

            {
                path: '/course-categories',
                element: <Leftside></Leftside>
            },
            // {
            //     path: '/course-categories',
            //     element: <RightSide></RightSide>
            // },
            {
                path: '/category/:id',
                element: <CourseCategory></CourseCategory>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            }
        ]
    }
])