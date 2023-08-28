import React, { FC } from "react";
import { useNavigate, Link } from "react-router-dom";

const Home: FC = () => {
    const nav = useNavigate();

    function toLogin() {
        nav("/login");
        // 传递路由参数
        // nav("/login?b=10")
        // 或
        // nav({
        //     pathname: "/login",
        //     search : "b=23"
        // })
    }
    return (
        <>
            <div>Home</div>
            {/* 使用nav的方式进行路由导航 */}
            <button onClick={toLogin}>登录</button>
            {/* 使用Link组件进行路由导航 */}
            <Link to="register">注册</Link>
            {/* 传递参数 */}
            {/* <Link to="/register?a=1">注册</Link> */}
        </>
    )
}

export default Home;