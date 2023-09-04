// 列表页组件
import React from "react";
import { RouterProvider } from "react-router-dom";
import routerConfig from "./router/index";
import "./assets/css/reset.scss";
import "./assets/css/base.scss";

function App() {
  return (
    <>
      <RouterProvider router={routerConfig}></RouterProvider>
    </>
  );
}

export default App;
