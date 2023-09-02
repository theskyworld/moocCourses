// 编辑页面中的头部组件

import { LeftOutlined } from "@ant-design/icons";
import { Button, Space, Typography } from "antd";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./EditHeaderLayout.module.scss";
import EditToolbar from "./EditToolbar";


const EditHeader: FC = () => {
    const nav = useNavigate();
    const { Title } = Typography;

    return (
        <div className={styles['header-wrapper']}>
            <div className={styles.header}>
                <div className={styles.left}>
                    <Space>
                        <Button type="link" icon={<LeftOutlined />} onClick={() => { nav(-1) }}>返回</Button>
                        <Title>问卷标题</Title>
                    </Space>
                </div>
                <div className={styles.main}><EditToolbar/></div>
                <div className={styles.right}>
                    <Space>
                        <Button>保存</Button>
                        <Button type="primary">发布</Button>
                    </Space>
                </div>
            </div>
        </div>
    )
}


export default EditHeader;