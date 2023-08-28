import { createBrowserRouter } from "react-router-dom";
import { HOME_URL, LOGIN_URL, MANAGE_LIST_URL, MANAGE_STAR_URL, MANAGE_TRASH_URL, MANAGE_URL, QUESTION_EDIT_URL, QUESTION_STAT_URL, QUESTION_URL, REGISTER_URL } from "../assets/ts/constants";
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
        path: HOME_URL,
        // 有对应的布局页面的话，先指向布局页面
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: HOME_URL,
                // 然后再指向布局中的路由页面
                element: <Home></Home>
            },
            {
                path: LOGIN_URL.slice(1),
                element: <Login></Login>
            },
            {
                path: REGISTER_URL.slice(1),
                element: <Register></Register>
            },
            {
                path: MANAGE_URL.slice(1),
                element: <ManageLayout></ManageLayout>,
                children: [
                    {
                        path: MANAGE_LIST_URL.slice(1 + MANAGE_URL.length),
                        element: <List></List>
                    },
                    {
                        path: MANAGE_STAR_URL.slice(1 + MANAGE_URL.length),
                        element: <Star></Star>
                    },
                    {
                        path: MANAGE_TRASH_URL.slice(1 + MANAGE_URL.length),
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
        path: QUESTION_URL.slice(1),
        element: <QuestionLayout></QuestionLayout>,
        children: [
            {
                path: `${QUESTION_EDIT_URL.slice(1 + QUESTION_URL.length)}/:id`,
                element: <EditIndex></EditIndex>
            },
            {
                path: `${QUESTION_STAT_URL.slice(1 + QUESTION_URL.length)}/:id`,
                element: <StatIndex></StatIndex>
            },

        ]
    },
])



export default router;