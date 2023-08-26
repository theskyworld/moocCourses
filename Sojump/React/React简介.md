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

##### 添加使用 prettier 格式化代码规范的命令

```json
  "scripts": {
    "format" : " prettier --write 'src/**/*.+(js|ts|jsx|tsx)' "
  },
```

##### 配置 vscode 在文件保存时自动进行代码格式化的处理

`.vscode\settings.json`

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

##### 配置自定义的prettier代码规范，并在eslint规则中运用

```js
// .prettierrc.js

```