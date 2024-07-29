//创建用户相关的小仓库
import { defineStore } from "pinia";
let useUserStore = defineStore("user", {
  //小仓库存储数据的地方
  state: () => {
    return {};
  },
  //异步|逻辑的地方
  actions: {
    //用户登录的方法
    userLogin() {},
  },
  getters: {},
});
export default useUserStore;
