import React, { FC } from "react";
import { Link } from "react-router-dom";
import { LOGIN_URL } from "../assets/ts/constants";

const UserInfo: FC = () => {
    
    return (
        <>
            <Link to={LOGIN_URL}>登录</Link>
        </>
    )
}


export default UserInfo;