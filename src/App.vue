<template>
  <el-config-provider :locale="locale">
    <div>
      <router-view></router-view>
    </div>
  </el-config-provider>
</template>

<script setup lang="ts">
import zhCn from "element-plus/es/locale/lang/zh-cn";
import { reqLogin } from "./api/user";

let locale = zhCn;
onMounted(() => {
  // reqLogin();
});
</script>

<style lang="scss" scoped></style>
