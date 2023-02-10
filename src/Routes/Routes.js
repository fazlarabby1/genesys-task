import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/Main"
import Home from "../Pages/Home/Home/Home"
import LogIn from "../Pages/LogIn/LogIn"
import Registration from "../Pages/Registration/Registration"

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
                path: '/login',
                element: <LogIn />
            },
            {
                path: '/signup',
                element: <Registration />
            }
        ]
    }
])