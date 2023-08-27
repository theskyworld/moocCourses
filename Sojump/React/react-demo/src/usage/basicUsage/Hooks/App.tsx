import react, { useEffect, useState } from "react";
import "../../../styles/App.css";
import AppSon from "./AppSon";

const App = () => {
  const [count, setCount] = useState(0);
  const [userInfo, setUserInfo] = useState({name : 'Alice', age : 12})
  const [nums, setNums] = useState([1, 2, 3]);

  // 第一个参数为执行的回调函数，第二个参数为一个存放指定依赖的数组
  // 如果数组为空，表示回调函数在组件初次渲染和组件更新时进行回调
  // 如果数组不为空，表示回调函数在组件初次渲染和组件更新和依赖更新时触发回调
  useEffect(() => {
    console.log("组件更新...")
  }, [])
  
  useEffect(() => {
    console.log("count值更新...")
  },[count])
  function addCount() {
    setCount(count + 1);
    console.log("current count : ", count); // 0 1 2 3 4 5... 获取到的值更新之前的值
  }

  // function addCount() {
  //   setCount(count + 1);
  //   setCount(count + 1);
  //   setCount(count + 1);
  //   setCount(count + 1);
  //   // 以上的多次对count修改的操作会被合并，页面上展示的count的值为1
  // }
  // 除非使用异步修改的方式
  // function addCount() {
  //   setCount(count => count + 1);
  //   setCount(count => count + 1);
  //   setCount(count => count + 1);
  //   // 页面上展示的count的值为3
  // }

  function addUserInfoAge() {
    // 对响应式数据进行修改时，并不是直接对原来的值进行修改
    // 而是传入一个新的值来覆盖原来的值
    setUserInfo({
      ...userInfo,
      // 使用+1后的age
      age: userInfo.age + 1
    })
  }

  function addNum() {
    setNums(nums.concat(4, 5));
    // 或
    // setNums([...nums, 4, 5]);
  }

  function deleteNum(id: number) {
    setNums(nums.filter((num, index) => index !== id));
  }

  return (
    <div className="App">
      <button onClick={addCount}>{count}</button>
      <p>{JSON.stringify(userInfo)}</p>
      <button onClick={addUserInfoAge}>click</button>
      <p>{JSON.stringify(nums)}</p>
      <button onClick={addNum}>click</button>
      <div>
        <ul>
          {
            nums.map((num, index) => {
              return <AppSon id={index} key={num} title={num} deleteNum={deleteNum}></AppSon>
            })
          }
        </ul>
      </div>
    </div>
  );
};

export default App;