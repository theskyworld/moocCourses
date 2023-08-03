import "./styles/index.css";
import { createApp } from "vue";
import App from "./App.vue";

// for Icon
// 引入SVG核心库
import { library } from "@fortawesome/fontawesome-svg-core";
// 引入所需要使用的图标
// import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
// fas代表可以使用所有已安装的图标
import { fas } from "@fortawesome/free-solid-svg-icons";
// 引入对应的库中内置Vue组件
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* *************************************导包分界线************************************* */

// 注册需要使用的图标
library.add(fas);
createApp(App).mount("#app");
