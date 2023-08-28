import React, { FC } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import styles from "./ManageLayout.module.scss";
import { Button, Space, Divider } from 'antd';
import { PlusOutlined, BarsOutlined, StarOutlined, DeleteOutlined } from "@ant-design/icons"

const ManageLayout: FC = () => {
    const nav = useNavigate();
    // 获取跳转不同页面对应的路由片段
    const { pathname } = useLocation();
    return (
        <div className={styles.container}>
            <div className={styles["left"]}>
                <p>ManageLayout left</p>
                {/* <button>创建问卷</button><br />
                <a href="#">我的问卷</a><br />
                <a href="#">星标问卷</a><br />
                <a href="#">回收站</a> */}
                <Space wrap>
                    <Button type="default" size="small" icon={<PlusOutlined />}>新建问卷</Button>
                    <Divider style={{ borderTop: 'transparent' }} />
                    {/* 根据pathname来动态设置Button的type值 */}
                    {/* 让当前页面所对应的Button按钮样式呈现类似于激活的状态 */}
                    {/* <Button type="default" size="small" icon={<BarsOutlined />} onClick={() => nav('/manage/list')}>我的问卷</Button> */}
                    <Button type={pathname.startsWith('/manage/list') ? "primary" : "text"} size="small" icon={<BarsOutlined />} onClick={() => nav('/manage/list')}>我的问卷</Button>
                    <Divider style={{ borderTop: 'transparent' }} />
                    <Button type={pathname.startsWith('/manage/star') ? "primary" : "text"} size="small" icon={<StarOutlined />} onClick={() => nav('/manage/star')}>星标问卷</Button>
                    <Divider style={{ borderTop: 'transparent' }} />
                    <Button type={pathname.startsWith('/manage/trash') ? "primary" : "text" } size="small" icon={<DeleteOutlined />} onClick={() => nav('/manage/trash') }>回收站</Button>
                </Space>
            </div>
            <div className={styles.right}>
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default ManageLayout;