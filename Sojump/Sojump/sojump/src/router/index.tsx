import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ManageLayout from "../layouts/ManageLayout";
import QuestionLayout from "../layouts/QuestionLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import List from "../pages/manage/List";
import Star from "../pages/manage/Star";
import Trash from "../pages/manage/Trash";
import NotFound from "../pages/NotFound";
import EditIndex from "../pages/question/Edit";
import StatIndex from "../pages/question/Stat";
import Register from "../pages/Register";


const router = createBrowserRouter([
    {
        path: "/",
        // 有对应的布局页面的话，先指向布局页面
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                // 然后再指向布局中的路由页面
                element: <Home></Home>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
            },
            {
                path: "manage",
                element: <ManageLayout></ManageLayout>,
                children: [
                    {
                        path: "list",
                        element: <List></List>
                    },
                    {
                        path: "star",
                        element: <Star></Star>
                    },
                    {
                        path: "trash",
                        element: <Trash></Trash>
                    },
                ]
            },

            {
                // 当以上页面都为进入时，进入NotFound页面
                // 一般404页面都写在最后
                path: "*",
                element: <NotFound></NotFound>
            }
        ]
    },
    {
        path: "question",
        element: <QuestionLayout></QuestionLayout>,
        children: [
            {
                path: "edit/:id",
                element: <EditIndex></EditIndex>
            },
            {
                path: "stat",
                element: <StatIndex></StatIndex>
            },

        ]
    },
])



export default router;