// 编辑页面中的头部组件

import { EditOutlined, LeftOutlined } from "@ant-design/icons";
import { Button, Input, Space, Typography } from "antd";
import { ChangeEvent, FC, MouseEvent, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useGetPageSetting from "../../../hooks/useGetPageSetting";
import { changePageTitle } from "../../../store/PageSettingReducer";
import styles from "./EditHeaderLayout.module.scss";
import EditToolbar from "./EditToolbar";


const EditHeader: FC = () => {
    const nav = useNavigate();
    const { Title } = Typography;

    // 显示和修改标题
    const TitleCom: FC = () => {
        const { title } = useGetPageSetting()
        const dispatch = useDispatch();
        const [editState, SetEditState] = useState(false)

        function handleChange(event: ChangeEvent<HTMLInputElement>) {
            const newTitle = event.target.value.trim()
            if (!newTitle) return
            dispatch(changePageTitle(newTitle))
        }

        if (editState) {
            return (
                <Input
                    autoFocus
                    value={title}
                    onChange={handleChange}
                    onPressEnter={() => SetEditState(false)}
                    onBlur={() => SetEditState(false)}
                />
            )
        }

        return (
            <Space align="baseline">
                <Title>{title}</Title>
                <Button icon={<EditOutlined />} type="text" onClick={() => {SetEditState(true) }} />
            </Space>
        )
    }

    return (
        <div className={styles['header-wrapper']}>
            <div className={styles.header}>
                <div className={styles.left}>
                    <Space>
                        <Button type="link" icon={<LeftOutlined />} onClick={() => { nav(-1) }}>返回</Button>
                        <TitleCom/>
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