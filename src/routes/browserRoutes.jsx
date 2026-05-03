import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const AppLayout = lazy(()=>import('../layout/AppLayout.jsx'));
const Home = lazy(() => import("../components/Home.jsx"));
const Products = lazy(() => import("../pages/Products.jsx"));
const Signup = lazy(() => import("../pages/Signup.jsx"));


export const router = createBrowserRouter([{
    path:'/',
    element:<AppLayout/>,
    children:[
        {
            path:"/",
            element:<Products/>
        },
        {
            path:"/products",
            element:<Products/>
        },
        {
            path:"/signup",
            element:<Signup/>
        }
    ]
}])