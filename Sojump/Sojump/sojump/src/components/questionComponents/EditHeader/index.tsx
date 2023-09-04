// 编辑页面中的头部组件

import { EditOutlined, LeftOutlined, LoadingOutlined } from "@ant-design/icons";
import { useDebounce, useDebounceEffect, useKeyPress, useRequest } from "ahooks";
import { Button, Input, Space, Typography } from "antd";
import { ChangeEvent, FC, MouseEvent, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import useGetComponentInfo from "../../../hooks/useGetComponentInfo";
import useGetPageSetting from "../../../hooks/useGetPageSetting";
import { updateQuestionService } from "../../../service/question";
import { changePageTitle } from "../../../store/PageSettingReducer";
import styles from "./EditHeaderLayout.module.scss";
import EditToolbar from "./EditToolbar";


const EditHeader: FC = () => {
    const nav = useNavigate();
    const { Title } = Typography;

    // 显示和修改标题组件
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

    // 保存按钮组件
    // 保存按钮
    const SaveButtonCom: FC = () => {
        const { id } = useParams()
        const { components = [] } = useGetComponentInfo()
        const pageInfo = useGetPageSetting()

        const { loading, run: save } = useRequest(
            async () => {
                if (!id) return
                // 此处保存的实质为将对问卷进行修改后的信息调用以下请求方法同步到后端
                await updateQuestionService(id, { ...pageInfo, components })
            },
            { manual: true }
        )

        // 快捷键
        useKeyPress(['ctrl.s', 'meta.s'], (event: KeyboardEvent) => {
            event.preventDefault()
            if (!loading) save()
        })

        // 自动保存（不是定期保存，不是定时器）
        useDebounceEffect(
            () => {
                save()
            },
            [components, pageInfo],
            {
                wait: 2000,
            }
        )

        // TODO 手动保存debounce
        return (
            <Button onClick={save} disabled={loading} icon={loading ? <LoadingOutlined /> : null}>
                保存
            </Button>
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
                        <SaveButtonCom/>
                        <Button type="primary">发布</Button>
                    </Space>
                </div>
            </div>
        </div>
    )
}


export default EditHeader;