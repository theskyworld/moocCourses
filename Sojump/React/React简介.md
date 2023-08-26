##### 数据驱动视图

可以理解为，通过一个函数(f)将数据(state)进行封装处理，然后得到最终渲染后的视图(UI)

**UI = f(state)**

只需要关注对数据的修改，不需要手动进行对 DOM 的操作(例如`createElement`、`appendChild`等)

##### 使用脚手架创建 react 项目

- 使用(react 脚手架)[https://create-react-app.dev/]
  `npx create-react-app my-app --template typescript`

- 使用(Vite)[https://vitejs.dev/]
  `npm init vite`
  `npm create vite`
