import { configureStore } from "@reduxjs/toolkit";
import componentsReducer, { ComponentsReducerState } from "./componentsReducer";
import PageSettingReducer, {PageSettingReducerState} from "./PageSettingReducer";

export interface State {
    components: ComponentsReducerState,
    pageSetting : PageSettingReducerState
}

export default configureStore({
    reducer: {
        components: componentsReducer,
        pageSetting : PageSettingReducer,
    }
})