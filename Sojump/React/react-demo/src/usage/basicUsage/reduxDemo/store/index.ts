import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./count";
 
export interface State {
    count: number;
}

export default configureStore({
    reducer: {
        count : countReducer,
    }
})