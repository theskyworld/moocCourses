import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueMacros from "unplugin-vue-macros";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueMacros({
      plugins: {
        vue: vue(),
        // vueJsx: VueJsx(), // 如果需要
      },
    }),
    vue(),
  ],
});
function VueMacros(arg0: {
  plugins: { vue: any };
}): import("vite").PluginOption {
  throw new Error("Function not implemented.");
}
