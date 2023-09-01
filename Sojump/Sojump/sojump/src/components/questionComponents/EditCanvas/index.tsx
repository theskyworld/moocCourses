import styles from "./EditCanvas.module.scss";
import { FC } from "react";
import QuestionTitle from "../QuestionTitle";
import QuestionInput from "../QuestionInput";
import { Spin } from "antd";
import { ComponentInfoProps, ComponentsConfig, getComponentConfigByType } from "../componentsConfig";
import { ComponentInfo } from "../../../store/componentsReducer";
import useGetComponentInfo from "../../../hooks/useGetComponentInfo";

interface EditCanvasProps {
    loading: boolean;
}


// 根据组件的配置动态生成组件
function generateComponentByConfig(componentInfo: ComponentInfo) {
    // 获取componentInfo中的type属性和props属性
    const { type, props } = componentInfo;

    // 根据type属性获取对应的组件配置，其中包含component属性（对应的最终组件）
    const componentConfig = getComponentConfigByType(type);
    if (!componentConfig) return null;
    // 最终的组件
    const { Component } = componentConfig;
    // 返回最终的组件及其属性
    return <Component {...props} />

}

const EditCanvas: FC<EditCanvasProps> = ({ loading }) => {
    const { components } = useGetComponentInfo();

    if (loading) {
        return (
            <div style={{textAlign : "center", marginTop : "24px"}}>
                <Spin size="large" tip="Loading..."></Spin>
            </div>
        )
    }

    return (
        // 根据当前问卷所包含的不同组件的配置来动态地生成组件及其对应的组件中的数据
        <div className={styles.canvas}>
            {
                components.map((componentInfo: ComponentInfo) => {
                    const { fe_id } = componentInfo;
                    return (
                        <div key={fe_id} className={styles['component-wrapper']}>
                            <div className={styles.component}>
                                {generateComponentByConfig(componentInfo)}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default EditCanvas;