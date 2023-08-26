# Hooks

## `useState`

通过`useState`来定义一个响应式数据和对数据进行更新

```tsx
import react, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  function addCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={addCount}>{count}</button>
    </div>
  );
};
```

### 特点

- 异步更新
  - 在JSX中更新前，无法获取到更新后的响应式数据值

    ```tsx
    const App = () => {
        const [count, setCount] = useState(0);

        function addCount() {
            setCount(count + 1);
            console.log("current count : ", count); // 0 1 2 3 4 5... 获取到的值更新之前的值
        }

        return (
            <div className="App">
            <button onClick={addCount}>{count}</button>
            </div>
        );
    };

    ```

  - 在同一个修改响应式数据的函数内，多次的同步修改操作将被合并

    ```tsx
    function addCount() {
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
        // 以上的多次对count修改的操作会被合并，页面上展示的count的值为1
    }
    ```

    除非使用异步修改的方式

    ```tsx
    function addCount() {
    setCount(count => count + 1);
    setCount(count => count + 1);
    setCount(count => count + 1);
    // 页面上展示的count的值为3
    }
    ```

- 不可变数据

  ```tsx
  const App = () => {
    const [userInfo, setUserInfo] = useState({name : 'Alice', age : 12})
    const [nums, setNums] = useState([1,2,3]);

    function addUserInfoAge() {
        // 对响应式数据进行修改时，并不是直接对原来的值进行修改
        // 而是传入一个新的值来覆盖原来的值
        setUserInfo({
        ...userInfo,
        // 使用+1后的age
        age: userInfo.age + 1
        })
    };

    function addNum() {
        setNums(nums.concat(4, 5));
        // 或
        // setNums([...nums, 4, 5]);
    }
    return (
        <div className="App">
        {/* <button onClick={addCount}>{count}</button> */}
        <p>{JSON.stringify(userInfo)}</p>
        <button onClick={addUserInfoAge}>click</button>
        <p>{JSON.stringify(nums)}</p>
        <button onClick={addNum}>click</button>
        </div>
    );
  };
    ```
