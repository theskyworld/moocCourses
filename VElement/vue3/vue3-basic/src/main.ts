import { userKey } from "./keys";
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

const app = createApp(App);

app.provide(userKey, {
  user: "Alice",
  id: 1,
});
app.mount("#app");

// 创建多个应用实例并挂载
// const app2 = createApp(App);
// app2.mount("#app2");
