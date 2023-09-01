# 使用[Redux](https://redux.js.org/)

## 基本使用

##### 安装

```shell
npm install @reduxjs/toolkit react-redux
```

##### 创建根state

```ts
// store/index.ts
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
```

##### 创建state模块

```ts
// store/count.ts
import { createSlice } from "@reduxjs/toolkit";


const INIT_STATE = 100;

// 创建count模块
const countSlice = createSlice({
    name: "count",
    // state
    initialState: INIT_STATE,
    // actions
    reducers: {
        increase(state: number) {
            return state + 1;
        },
        decrease(state: number) {
            return state - 1;
        }
    }
})


export const { increase, decrease } = countSlice.actions;

export default countSlice.reducer;
```

##### 根组件中的配置

```tsx
// index.tsx
import App from "./usage/basicUsage/reduxDemo/Count";
import store from "./usage/basicUsage/reduxDemo/store"; 
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
```

##### 在组件中进行使用

```tsx
import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "./store/count";
import { State } from "./store";

const Count: FC = () => {
    // 使用state
    const count = useSelector<State>(state => state.count);
    // 使用action
    const dispatch = useDispatch();

    return (
        <div>
            <span><>count : {count}</></span>
            <button onClick={() => dispatch(increase())}>+</button>
            <button onClick={() => dispatch(decrease())}>-</button>
        </div>
    )
}


export default Count;
```

## 使用`useReducer`

`useReducer`可以认为是`useState`的替代方案

当组件中数据结构简单时使用`useState`; 数据结构复杂时使用`useReducer`

同时`useReducer`也可以认为是简化版的redux

基本使用

```tsx
import { FC, useReducer } from "react";

interface CountState {
    count: number
}

interface CountAction {
    type: string;
}

//  state初始值
const initialState: CountState = {
    count: 100,
}

// 判断action的类型，对state(不可变数据)进行操作，返回新的state
function reducer(state: CountState, action: CountAction) {
    switch (action.type) {
        case "increase":
            return {
                count: state.count + 1,
            };
        case "decrease":
            return {
                count: state.count - 1,
            }
        default:
            throw new Error("wrong action type");
    }
}

const CountReducer: FC = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <p>count : {state.count}</p>
            <button onClick={() => dispatch({ type: "increase" })}>+</button>
            <button onClick={() => dispatch({ type: "decrease" })}>-</button>
        </>
    )
}

export default CountReducer;
```
