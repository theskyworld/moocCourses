import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {ComponentInfoProps} from "../../components/questionComponents/componentsConfig";



export interface ComponentInfo {
    fe_id: string; //对应后端数据中components中的fe_id
    type: string;
    title: string;
    props: ComponentInfoProps;
}

export interface ComponentsReducerState {
    components: ComponentInfo[];
} 

const INIT_STATE: ComponentsReducerState = {
    components: [],
};

const componentsReducer = createSlice({
    name: "components",
    initialState: INIT_STATE,
    reducers: {
        // 初始化/重置所有组件
        initComponents: (state: ComponentsReducerState, action: PayloadAction<ComponentsReducerState>) => {
            return action.payload;  
            
        }
    }
})

export const { initComponents } = componentsReducer.actions;

export default componentsReducer.reducer;