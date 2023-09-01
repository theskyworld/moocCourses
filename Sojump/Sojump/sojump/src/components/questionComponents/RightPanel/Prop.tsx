// 右侧栏中属性一栏的组件

import { FC } from "react";
import useGetComponentInfo from "../../../hooks/useGetComponentInfo";
import { getComponentConfigByType } from "../componentsConfig";


const NoProp : FC = () => {
    return <div style={{textAlign : "center"}}>未在画布中选中任何组件</div>
}

const Prop: FC = () => {
    const { selectedComponent } = useGetComponentInfo();
    
    if (!selectedComponent) return <NoProp />
    
    const { type, props } = selectedComponent;
    const componentConfig = getComponentConfigByType(type);
    if (!componentConfig) return <NoProp />
    
    const { Prop } = componentConfig;
    
    return <Prop {...props}/>
}

export default Prop;