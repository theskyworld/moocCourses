// 列表页组件
import React from "react";
import "./assets/css/App.css";
import List from "./pages/manage/List";
import { RouterProvider } from "react-router-dom";
import routerConfig from "./router/index";

function App() {
  return (
    <>
      <RouterProvider router={routerConfig}></RouterProvider>
    </>
  );
}

export default App;
