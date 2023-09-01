// 组件库
import { FC } from "react";
import { ComponentsConfig, componentsGroupConfig } from "../componentsConfig";
import { Typography } from "antd";
import styles from "./ComponentLib.module.scss";


function generateComponent(c : ComponentsConfig) {
    const { title, Component, type } = c;
    return (
        <div className={styles.wrapper}>
            <div className={styles.component}>
                <Component />
            </div>
        </div>
    )
}

const ComponentLib: FC = () => {
    const { Title } = Typography;

    return (
        <>
            {
                componentsGroupConfig.map((group, index) => {
                    const { groupId, groupName, components } = group;
                    return (
                        <div key={groupId}>
                            <Title level={3} style={{ color : "#1890ff", fontSize : "16px", marginTop : index > 0 ? "20px" : "0"} }>
                                <span>{groupName }</span>
                            </Title>
                            <div>{components.map(c => generateComponent(c)) }</div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default ComponentLib;