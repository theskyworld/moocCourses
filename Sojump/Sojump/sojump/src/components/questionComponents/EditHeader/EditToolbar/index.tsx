// 头部中的工具栏
import { BlockOutlined, CopyOutlined, DeleteOutlined, EyeInvisibleOutlined, LockOutlined } from "@ant-design/icons";
import { Button, Space, Tooltip } from "antd";
import React, { FC } from "react";
import { useDispatch } from "react-redux";
import useGetComponentInfo from "../../../../hooks/useGetComponentInfo";
import { copyComponent, pasteCopiedComponent, removeSelectedComponent, toggleisHidden, toggleIsLocked } from "../../../../store/componentsReducer";

const EditToolbar: FC = () => {
    const dispatch = useDispatch();
    const { selectedId,selectedComponent, copiedComponent } = useGetComponentInfo();
    const { isLocked } = selectedComponent || {};



    function handleDelete() {
        dispatch(removeSelectedComponent());
    }


    // 通过工具栏隐藏组件
    function handleHidden() {
        dispatch(toggleisHidden())
    }

    // 锁定组件
    function handleLock() {
        dispatch(toggleIsLocked())
    }

    // 复制组件
    function copy() {
        dispatch(copyComponent())
    }

    // 粘贴组件
    function paste() {
        // 存在已复制的组件时才进行粘贴
        if (copiedComponent) {
            dispatch(pasteCopiedComponent())
        }
    }
    return (
        <Space>
            <Tooltip title='删除'>
                <Button shape="circle" icon={<DeleteOutlined />} onClick={handleDelete}></Button>
            </Tooltip>
            <Tooltip title='隐藏'>
                <Button shape="circle" icon={<EyeInvisibleOutlined />} onClick={handleHidden}></Button>
            </Tooltip>
            <Tooltip title={isLocked ? '解锁' : '锁定'}>
                <Button shape="circle" icon={<LockOutlined />} onClick={handleLock} type={isLocked ? 'primary' : 'default'}></Button>
            </Tooltip>
            <Tooltip title='复制'>
                <Button shape="circle" icon={<CopyOutlined />} onClick={copy}></Button>
            </Tooltip>
            <Tooltip title='粘贴'>
                <Button shape="circle" icon={<BlockOutlined />} onClick={paste} disabled={!copiedComponent}></Button>
            </Tooltip>
        </Space>
    );
}

export default EditToolbar

