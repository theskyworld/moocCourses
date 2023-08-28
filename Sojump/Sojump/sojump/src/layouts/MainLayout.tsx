import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import styles from "./MainLayout.module.scss";

const { Header, Content, Footer } = Layout;

const MainLayout: FC = () => {
    return (
        <Layout>
            <Header className={styles.header}>
                <div className={styles.left}>logo</div>
                <div className={styles.right}>登录</div>
            </Header>
            <Content className={styles.main}>
                {/* 类似于vue中的slot,RouterView */}
                <Outlet></Outlet>
            </Content>
            <Footer className={styles.footer}>V问卷 &copy;2023 - now. Created by tsw</Footer>
        </Layout>

    )
}

export default MainLayout;
