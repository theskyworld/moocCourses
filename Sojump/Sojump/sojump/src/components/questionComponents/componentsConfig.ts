/**
 * @description 当前问卷中不同组件的共同配置
 */

import { QuestionInputProps } from "./QuestionInput/questionInput";
import { QuestionTitleProps } from "./QuestionTitle/questionTitle";
import { FC } from "react";
import questionInputConfig from "./QuestionInput/questionInputConfig";
import questionTitleConfig from "./QuestionTitle/questionTitleConfig";


export type ComponentInfoProps = QuestionTitleProps & QuestionInputProps;

// 组件公共配置的类型
export interface ComponentsConfig {
    title: string;
    type: string;
    Component: FC<ComponentInfoProps>;
    defaultProps: ComponentInfoProps;
}


// 当前问卷中包含的所有组件配置的列表
const ComponentsConfigList: ComponentsConfig[] = [
    questionInputConfig,
    questionTitleConfig
]


// 根据配置中的type属性获取对应的组件配置
// 获取组件配置之后，再根据组件的配置生成对应的组件，将动态生成的组件渲染到EditCanvas组件之中
export function getComponentConfigByType(type: string): ComponentsConfig {
    return ComponentsConfigList.find(config => config.type === type)!
}