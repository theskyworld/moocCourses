import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {ComponentInfoProps} from "../../components/questionComponents/componentsConfig";



export interface ComponentInfo {
    fe_id: string; //对应后端数据中components中的fe_id
    type: string;
    title: string;
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
        }
    }
})

export const { initComponents, changeSelectedId, addComponent } = componentsReducer.actions;

export default componentsReducer.reducer;