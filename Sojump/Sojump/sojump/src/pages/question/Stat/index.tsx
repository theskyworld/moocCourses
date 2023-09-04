import { useTitle } from "ahooks";
import { Button, Result, Spin } from "antd";
import { divide } from "lodash";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import useGetPageSetting from "../../../hooks/useGetPageSetting";
import useLoadQuestionDataWithComponents from "../../../hooks/useLoadQuestionDataWithComponents";
import styles from "./StatLayout.module.scss";


const StatIndex: FC = () => {
    // 增加loading效果
    const { loading } = useLoadQuestionDataWithComponents();
    const {title, isPublished } = useGetPageSetting();
    const nav = useNavigate();

    // 修改页面标题
    useTitle(`问卷统计-${title}`);


    // loading
    const LoadingElem = (
        <div style={{ textAlign: "center", marginTop: "60px" }}><Spin tip="加载中..."><span></span></Spin></div>
    );

    function generateContentElem() {
        // 如果该问卷尚未发布
        if (typeof isPublished === 'boolean' && !isPublished) {
            return (
                <div style={{ flex: '1' }}>
                    <Result
                        status="warning"
                        title="该页面尚未发布"
                        extra={
                            <Button type="primary" onClick={() => nav(-1)}>
                                返回
                            </Button>
                        }
                    ></Result>
                </div>
            )
        }

        return (
            <p>统计页面</p>
        )
    }
    return (
        <div className={styles.container}>
            <p>头部</p>
            <div className={styles['content-wrapper']}>
                {loading && LoadingElem}
                {!loading && <div className={styles.content}>{generateContentElem()}</div>}
            </div>
        </div>
    )
}

export default StatIndex;