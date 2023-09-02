import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {ComponentInfoProps} from "../../components/questionComponents/componentsConfig";



export interface ComponentInfo {
    fe_id: string; //对应后端数据中components中的fe_id
    type: string;
    title: string;
    isHidden: boolean;
    isLocked: boolean;
    props: ComponentInfoProps;
}

export interface ComponentsReducerState {
    selectedId: string; // 在画布中选中的问卷的组件id，以便进行左中右三栏中内容的联动
    components: ComponentInfo[];
} 

const INIT_STATE: ComponentsReducerState = {
    selectedId : "",
    components: [],
};

const componentsReducer = createSlice({
    name: "components",
    initialState: INIT_STATE,
    // 定义以下actions对画布中的组件进行操作
    reducers: {
        // 初始化/重置所有组件
        initComponents: (state: ComponentsReducerState, action: PayloadAction<ComponentsReducerState>) => {
            return action.payload;  
        },
        // 根据在画布中鼠标点击的行为切换当前鼠标选中的组件的id
        changeSelectedId :(state: ComponentsReducerState, action: PayloadAction<string>) => {
            return {
                ...state,
                selectedId: action.payload,
            }
        },
        // 新增组件到画布中
        addComponent : (state: ComponentsReducerState, action: PayloadAction<ComponentInfo>) => {
            const { selectedId,components } = state;
            // 找到当前选中的组件的id
            const index = components.findIndex(component => component.fe_id === selectedId);
            // 如果当前未选中任何组件，直接将新的组件添加到最后
            if (index === -1) {
                return {
                    ...state,
                    // 添加之后，将当前新添加的组件设置为选中的组件
                    selectedId : action.payload.fe_id,
                    components: [...state.components, action.payload],
                }
            } else {
                // 否则添加到选中的组件的后面
                return {
                    ...state,
                    selectedId : action.payload.fe_id,
                    components: [
                        ...state.components.slice(0, index + 1),
                        action.payload,
                        ...state.components.slice(index + 1, state.components.length),
                    ],
                }
            }
        },

        // 修改组件属性
        changeComponentProps : (state: ComponentsReducerState, action: PayloadAction<{fe_id: string, newProps : ComponentInfoProps}>) => {
            const { fe_id, newProps } = action.payload;

            // 要修改的当前组件
            const currentComponent = state.components.find(component => component.fe_id === fe_id);
            if (currentComponent) {
                currentComponent.props = {
                    ...currentComponent.props,
                    ...newProps,
                };
            }
        },

        // 删除当前选中的组件
        removeSelectedComponent(state: ComponentsReducerState) {
            const { components = [], selectedId = '' } = state;
            const index = components.findIndex(component => component.fe_id === selectedId);
            const filterComponents = components.filter(component => component.fe_id !== selectedId);
            return {
                ...state,
                // 更新selectedId
                // 如果被删除的组件为第一个组件，下次选中的组件就是剩下的组件中的第一个组件
                // 否则，下次选中的组件都为被删除组件的前一个组件
                selectedId: index === 0 ? filterComponents[0]?.fe_id || "" : filterComponents.at(-1)?.fe_id || '',
                components: filterComponents,
            }
        },

        // 隐藏/显示组件
        toggleisHidden(state : ComponentsReducerState) {
            const { components = [], selectedId = '' } = state;
            const index = components.findIndex(component => component.fe_id === selectedId);
            
            // 只显示不隐藏的组件
            const filterComponents = components.filter(component => {
                // 对于当前选中的组件，进行隐藏操作，返回false
                if(component.fe_id === selectedId) return false;
                return !component.isHidden
            });
            return {
                ...state,
                selectedId: index === 0 ? filterComponents[0]?.fe_id || "" : filterComponents.at(-1)?.fe_id || '',
                components: filterComponents,
            }
        },

        // 锁定/解锁组件
        toggleIsLocked(state : ComponentsReducerState) {
            const { selectedId, components } = state;
            const index = components.findIndex(component => component.fe_id === selectedId);

            return {
                ...state,
                components: [
                    ...components.slice(0, index),
                    {
                        ...components[index],
                        isLocked: !components[index].isLocked,
                    },
                    ...components.slice(index + 1, components.length),
                ]
            }
        }
    }
})

export const { initComponents, changeSelectedId, addComponent, changeComponentProps, removeSelectedComponent,toggleisHidden, toggleIsLocked } = componentsReducer.actions;

export default componentsReducer.reducer;