import React, { FC } from "react";
import { Outlet } from "react-router-dom";

const MainLayout: FC = () => {
    return (
        <>
            <div>MainLayout header</div>
            <div>
                {/* 类似于vue中的slot,RouterView */}
                <Outlet></Outlet>
            </div>
            <div>MainLayout footer</div>
        </>
    )
}

export default MainLayout;
