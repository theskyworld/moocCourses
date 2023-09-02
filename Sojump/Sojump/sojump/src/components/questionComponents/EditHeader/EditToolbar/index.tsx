// 头部中的工具栏
import { DeleteOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { Button, Space, Tooltip } from "antd";
import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { removeSelectedComponent, toggleisHidden } from "../../../../store/componentsReducer";

const EditToolbar: FC = () => {
    const dispatch = useDispatch();

    function handleDelete() {
        dispatch(removeSelectedComponent());
    }


    // 通过工具栏隐藏组件
    function handleHidden() {
        dispatch(toggleisHidden())
    }
    return (
        <Space>
            <Tooltip title='删除'>
                <Button shape="circle" icon={<DeleteOutlined />} onClick={handleDelete}></Button>
            </Tooltip>
            <Tooltip title='隐藏'>
                <Button shape="circle" icon={<EyeInvisibleOutlined />} onClick={handleHidden}></Button>
            </Tooltip>
        </Space>
    );
}

export default EditToolbar

