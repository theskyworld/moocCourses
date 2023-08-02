## vue3 概述

### 使用 Vite 搭建 vue 项目

[Vite 官网](https://cn.vitejs.dev/)

#### vite 特点

- 启动快
- HMR 支持
- 默认支持 TS、JSX、CSS 等
- 多种打包模式
- 通用插件
- 底层 API 支持 TS
- 不仅限于 Vue3,是一个通用的脚手架工具

#### 相较于 Vue-CLI

#### 结合 ESLint 进行代码规范检查

#### ESLint

[ESLint 官网](https://zh-hans.eslint.org/)

安装 : `npm init @eslint/config`
检查版本 : `npx eslint --version`
检查指定的文件是否存在代码规范错误: `npx eslint index.ts`

##### 配置文件

```json
// .eslintrc.cjs
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:vue/vue3-essential"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
  // 配置代码样式规则
  // 安装对应的ESLint插件后，出现问题会在工作区内报错
  "rules": {
    // 设置分号规则
    "semi": 1, // 0 不需要添加分号; 1 未添加时警告; 2 未添加时报错
  },
  // 继承指定的规则组
  "extends": "eslint:recommended", // 继承官方推荐的规则
  // 或者例如添加公司内部得到样式规范，以便统一规范
};
```

##### 结合 ESLint 使用

安装插件: `npm install vite-plugin-eslint --save-dev`

修改配置文件:

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import "eslint" from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslint()],
})

```

```json
// .eslintrc.cjs
module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true,
  },
  // ...
};
```

默认情况下，ESLint 只支持 JS 文件，现通过以下配置使其支持 Vue 文件和 TS 文件

- 使 eslint 支持 vue

  - [官网](https://eslint.vuejs.org/)

  - 安装插件 : `npm install eslint-plugin-vue --save-dev`
  - 修改配置文件(.eslintrc.cjs) : `"extends": ["plugin:vue/vue3-essential"]`

- 使 eslint 支持 TS

  - [官网](https://typescript-eslint.io/)

  - 安装插件 : `npm install @vue/eslint-config-typescript --save-dev`

  - 修改配置文件(.eslintrc.cjs) : `"extends": ["plugin:vue/vue3-essential", "@vue/eslint-config-typescript"]`

### vue3 新特性

[vue3.3 新特性](https://blog.vuejs.org/posts/vue-3-3)
