import { Navigate, createBrowserRouter } from "react-router-dom";
import MainLayout from "../LayOuts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Category from "../Pages/Home/Category/Category";

import News from "../Pages/News/News/News";
import NewsLayout from "../LayOuts/NewsLayout";
import LoginLayout from "../LayOuts/LoginLayout";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../Pages/Shared/Terms/Terms";

const router = createBrowserRouter([
    {
        path : '/',
        element : <LoginLayout></LoginLayout>,
        children : [
            {
                path : '/',
                element : <Navigate to='/category/0'></Navigate>

            },
            {
                path : 'login',
                element : <Login></Login>
            },
            {
                path : 'register',
                element : <Register></Register> 
            },
            {
                path : 'terms',
                element : <Terms></Terms> 
            }
        ]

    },
    {
        path: 'category',
        element: <MainLayout></MainLayout>,
        children: [
                {
                    path : ':id',
                    element: <Category></Category>,
                    loader : ({params}) => fetch(`https://server-sayemsaadat0.vercel.app/categories/${params.id}`)
                }
        ]
    },
    {
        path : 'news',
        element : <NewsLayout></NewsLayout>,
        children : [
            {
                path : ':id',
                element : <PrivateRoute>
                    <News></News>
                </PrivateRoute>,
                loader: ({params})=> fetch(`https://server-sayemsaadat0.vercel.app/news/${params.id}`)
            }
        ]
    }

])

export default router