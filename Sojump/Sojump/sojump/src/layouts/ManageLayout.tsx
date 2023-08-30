import React, { FC, useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import styles from "./ManageLayout.module.scss";
import { Button, Space, Divider, message } from 'antd';
import { PlusOutlined, BarsOutlined, StarOutlined, DeleteOutlined } from "@ant-design/icons"
import { createQuestionService, } from "../service/question";
import { QUESTION_EDIT_URL } from "../assets/ts/constants";

const ManageLayout: FC = () => {
    const nav = useNavigate();
    // 获取跳转不同页面对应的路由片段
    const { pathname } = useLocation();
    const [isLoading, setIsLoading] = useState(false);



    async function handleCreateQuestionClick() {
        setIsLoading(true);
        const data = await createQuestionService();
        const { id } = data;

        if (id) {
            // 根据id，跳转到问卷编辑(新建)页面
            nav(`${QUESTION_EDIT_URL}/${id}`);
            message.success("跳转成功")
        }
        setIsLoading(false);
    }

    return (
        <div className={styles.container}>
            <div className={styles["left"]}>
                {/* <p>ManageLayout left</p> */}
                <Space wrap>
                    <Button type="default" size="small" icon={<PlusOutlined />} onClick={handleCreateQuestionClick} disabled={isLoading}>新建问卷</Button>
                    <Divider style={{ borderTop: 'transparent' }} />
                    {/* 根据pathname来动态设置Button的type值 */}
                    {/* 让当前页面所对应的Button按钮样式呈现类似于激活的状态 */}
                    {/* <Button type="default" size="small" icon={<BarsOutlined />} onClick={() => nav('/manage/list')}>我的问卷</Button> */}
                    <Button type={pathname.startsWith('/manage/list') ? "primary" : "text"} size="small" icon={<BarsOutlined />} onClick={() => nav('/manage/list')}>我的问卷</Button>
                    <Divider style={{ borderTop: 'transparent' }} />
                    <Button type={pathname.startsWith('/manage/star') ? "primary" : "text"} size="small" icon={<StarOutlined />} onClick={() => nav('/manage/star')}>星标问卷</Button>
                    <Divider style={{ borderTop: 'transparent' }} />
                    <Button type={pathname.startsWith('/manage/trash') ? "primary" : "text"} size="small" icon={<DeleteOutlined />} onClick={() => nav('/manage/trash')}>回收站</Button>
                </Space>
            </div>
            <div className={styles.right}>
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default ManageLayout;