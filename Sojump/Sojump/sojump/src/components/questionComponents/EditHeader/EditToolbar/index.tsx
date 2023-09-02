// 头部中的工具栏
import { DeleteOutlined, EyeInvisibleOutlined, LockOutlined } from "@ant-design/icons";
import { Button, Space, Tooltip } from "antd";
import React, { FC } from "react";
import { useDispatch } from "react-redux";
import useGetComponentInfo from "../../../../hooks/useGetComponentInfo";
import { removeSelectedComponent, toggleisHidden, toggleIsLocked } from "../../../../store/componentsReducer";

const EditToolbar: FC = () => {
    const dispatch = useDispatch();
    const { selectedId,selectedComponent } = useGetComponentInfo();
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
    return (
        <Space>
            <Tooltip title='删除'>
                <Button shape="circle" icon={<DeleteOutlined />} onClick={handleDelete}></Button>
            </Tooltip>
            <Tooltip title='隐藏'>
                <Button shape="circle" icon={<EyeInvisibleOutlined />} onClick={handleHidden}></Button>
            </Tooltip>
            <Tooltip title='锁定'>
                <Button shape="circle" icon={<LockOutlined />} onClick={handleLock} type={isLocked ? 'primary' : 'default'}></Button>
            </Tooltip>
        </Space>
    );
}

export default EditToolbar

