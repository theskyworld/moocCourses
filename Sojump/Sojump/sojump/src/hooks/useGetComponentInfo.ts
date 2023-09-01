/**
 * @description 不同组件中统一从state中获取componentInfo数据的方法
 */

import { useSelector } from "react-redux";
import { State } from "../store";
import { ComponentsReducerState } from './../store/componentsReducer/index';
 
function useGetComponentInfo() {
    const components = (useSelector<State>(state => state.components) as ComponentsReducerState).components;

    return {components};

}

export default useGetComponentInfo;