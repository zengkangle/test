import { createApp } from "vue";
import App from "@/App.vue";
//SVG插件需要配置代码
import "virtual:svg-icons-register";
//引入自定义插件对象：注册整个项目全局组件
//@ts-ignore
import globalComponent from "@/components";
//引入模版的全局样式
import "@/styles/index.scss";
//引入路由
import router from "./router";
//引入仓库
import pinia from "./store";

//引入样式
import "element-plus/theme-chalk/el-loading.css";
import "element-plus/theme-chalk/el-message.css";
import "element-plus/theme-chalk/el-notification.css";
import "element-plus/theme-chalk/el-message-box.css";
import "element-plus/theme-chalk/el-drawer.css";

//获取app实例对象
const app = createApp(App);
//安装自定义插件
app.use(globalComponent);
//安装仓库
app.use(pinia);
//注册模版路由
app.use(router);
//将app挂载到挂载点上
app.mount("#app");
// console.log(import.meta.env);
// console.log(globalComponent);
