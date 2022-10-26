import { createBrowserRouter } from "react-router-dom";
import CourseCategory from "../CourseCategory/CourseCategory";
import Home from "../Home/Home";
import Main from "../Layout/Main/Main";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";
import DetailCourse from "../Share/DetailCourse";
import Leftside from "../Share/Leftside";
import RightSide from "../Share/RightSide";
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
                loader: ({ params }) => fetch(`http://localhost:5000/courseDetails/${params.id}`)
            },
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