import { FileTextOutlined, SettingOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
import { FC } from "react";
import Prop from "./Prop";

const RightPanel: FC = () => {

    const tabsItems = [
        // 属性
        {
            key: "prop",
            label: (
                <span>
                    <FileTextOutlined />
                    属性
                </span>
            ),
            children: <Prop/>
        },
        // 设置
        {
            key: "setting",
            label: (
                <span>
                    <SettingOutlined />
                    页面设置
                </span>
            ),
            children: <p>页面设置</p>
        }
    ]

    return <Tabs defaultActiveKey="prop" items={tabsItems}></Tabs>
}


export default RightPanel;