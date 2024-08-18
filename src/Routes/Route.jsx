import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import ProductPage from "../pages/product/ProductPage";
import Login from "../pages/LoginPage/Login";
import Registration from "../pages/registration/Registration";
import PrivateRoute from "./PrivateRoute";
import HomeContent from "../components/HomeContent";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        children:[
            {
                path: '/',
                element: <HomeContent></HomeContent>
            },
            {
                path: '/products',
                element: <PrivateRoute><ProductPage></ProductPage></PrivateRoute>
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

export default router
