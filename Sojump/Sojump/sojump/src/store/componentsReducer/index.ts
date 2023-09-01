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
        }
    }
})

export const { initComponents, changeSelectedId } = componentsReducer.actions;

export default componentsReducer.reducer;