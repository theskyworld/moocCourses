import React, { FC } from "react";
import { useParams } from "react-router-dom";
const EditIndex: FC = () => {
    // 获取路由参数
    // 路由参数的参数名在path中定义，例如:id定义的路由参数名为id
    // 定义的路径为 "path: "edit/:id""
    // 路由参数的参数值在跳转的路由中定义，例如对应的/123表示id的值为123
    // 输入的路径为 "/edit/123"
    const { id = '' } = useParams();
    return (
        <>
            <div>EditIndex</div>
            <p>{id}</p>
        </>
    )
}

export default EditIndex;