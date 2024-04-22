// 路由配置

import Layout from "../pages/Layout";
import  Login from "../pages/Login";

// 配置路由
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>
    },
    {
        path: '/login',
        element: <Login></Login>
    }
])

export default router