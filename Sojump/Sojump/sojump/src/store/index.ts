import { configureStore } from "@reduxjs/toolkit";
import componentsReducer, { ComponentsReducerState } from "./componentsReducer";

export interface State {
    components : ComponentsReducerState
}

export default configureStore({
    reducer: {
        components : componentsReducer,
    }
})