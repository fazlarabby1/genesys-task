import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/Main"
import AllUsers from "../Pages/AllUsers/AllUsers"
import Home from "../Pages/Home/Home/Home"
import LogIn from "../Pages/LogIn/LogIn"
import Registration from "../Pages/Registration/Registration"
import ResetPassword from "../Pages/ResetPassword/ResetPassword"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/users',
                element: <AllUsers />
            },
            {
                path: '/login',
                element: <LogIn />
            },
            {
                path: '/resetPassword',
                element: <ResetPassword />
            },
            {
                path: '/signup',
                element: <Registration />
            }
        ]
    }
])