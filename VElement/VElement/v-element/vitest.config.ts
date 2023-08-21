/// <reference types="vitest"/>

// 自定义vitest的配置文件，将原来默认对vite.config.ts文件的使用改为使用vitest.config.ts文件
// 解决在Node环境下执行npx vitest Button命令来执行测试文件时不存在DOM的问题（报错 :document is not defined）

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import VueMacros from "unplugin-vue-macros";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueMacros.vite({
      plugins: {
        vue: vue(),
        vueJsx: vueJsx(),
      },
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
  },
});
